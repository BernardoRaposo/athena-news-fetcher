require('dotenv').config();
const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const yargs = require('yargs');

// Allowed NewsData.io categories
const VALID_CATEGORIES = [
  'business', 'crime', 'domestic', 'education', 'entertainment', 'environment',
  'food', 'health', 'lifestyle', 'politics', 'science', 'sports', 'technology',
  'top', 'tourism', 'world', 'other'
];

// Parse command-line arguments
const argv = yargs
  .option('topics', {
    type: 'string',
    description: 'Comma-separated list of topics (e.g., business,sports)',
    coerce: (topics) => topics ? topics.split(',').map(t => t.trim()) : []
  })
  .help()
  .argv;

// Load configuration from config.json
async function loadConfig() {
  try {
    const configPath = path.join(__dirname, 'config.json');
    console.log('Config path:', configPath); // Debug log
    const configData = await fs.readFile(configPath, 'utf8');
    console.log('Raw config data:', configData); // Debug log
    const config = JSON.parse(configData);

    // Ensure topics is an array from config or CLI
    let topics = config.topics || [];
    if (argv.topics && argv.topics.length > 0) {
      topics = argv.topics;
    }
    if (!Array.isArray(topics) || topics.length === 0) {
      throw new Error('Config or CLI must provide a non-empty "topics" array');
    }
    topics.forEach(topic => {
      if (!VALID_CATEGORIES.includes(topic)) {
        throw new Error(`Invalid topic: ${topic}. Must be one of: ${VALID_CATEGORIES.join(', ')}`);
      }
    });

    // Validate output file
    if (!config.outputFile || typeof config.outputFile !== 'string') {
      throw new Error('Config must include a valid "outputFile" string');
    }
    config.append = config.append === true; // Ensure append is boolean

    return { ...config, topics };
  } catch (error) {
    console.error('Error loading config:', error.message);
    process.exit(1);
  }
}

/**
 * Fetches news articles for a given topic from NewsData.io API.
 * @param {string} topic - The topic to fetch news for (e.g., 'business').
 * @returns {Promise<Array>} Array of formatted article objects.
 */
async function fetchNewsByTopic(topic) {
  try {
    const response = await axios.get('https://newsdata.io/api/1/news', {
      params: {
        apikey: process.env.NEWS_DATA_IO_API_KEY,
        category: topic, // Use category parameter for NewsData.io
        language: 'en', // English articles; modify as needed
        size: 10 // Max 10 articles per request (free tier limit)
      }
    });

    if (response.data.status !== 'success') {
      throw new Error(`API error for ${topic}: ${response.data.message}`);
    }

    return response.data.results.map(article => ({
      title: article.title,
      link: article.link,
      summary: article.description || 'No summary available',
      published: article.pubDate,
      source: article.source_id || 'Unknown source',
      image: article.image_url || null, // Include image if available
      category: article.category || topic
    }));
  } catch (error) {
    console.error(`Error fetching news for ${topic}:`, error.message);
    return [];
  }
}

/**
 * Creates a news object by fetching articles for all configured topics.
 * @param {string[]} topics - Array of topics to fetch.
 * @returns {Promise<Object>} Object with topics as keys and article arrays as values.
 */
async function createNewsObject(topics) {
  // Fetch topics sequentially to avoid hitting rate limits
  const news = {};
  for (const topic of topics) {
    console.log(`Fetching news for ${topic}...`);
    news[topic] = await fetchNewsByTopic(topic);
    console.log(`Fetched ${news[topic].length} articles for ${topic}`);
  }
  return news;
}

/**
 * Saves the news object to a file, with option to append or overwrite.
 * @param {Object} news - The news object to save.
 * @param {string} outputFile - The file path to save to.
 * @param {boolean} append - Whether to append to existing file.
 */
async function saveNewsObject(news, outputFile, append) {
  try {
    const filePath = path.join(__dirname, outputFile);
    let existingData = {};

    if (append) {
      try {
        const existingContent = await fs.readFile(filePath, 'utf8');
        existingData = JSON.parse(existingContent);
      } catch (error) {
        if (error.code !== 'ENOENT') {
          console.error('Error reading existing file:', error.message);
        }
      }
    }

    // Merge new articles, avoiding duplicates by link
    const updatedNews = { ...existingData };
    for (const topic in news) {
      if (!updatedNews[topic]) updatedNews[topic] = [];
      const existingLinks = new Set(updatedNews[topic].map(article => article.link));
      updatedNews[topic].push(...news[topic].filter(article => !existingLinks.has(article.link)));
    }

    await fs.writeFile(filePath, JSON.stringify(updatedNews, null, 2));
    console.log(`News object saved to ${outputFile}`);
  } catch (error) {
    console.error('Error saving news object:', error.message);
  }
}

/**
 * Main function to run the Athena news fetcher.
 */
async function runAthena() {
  const config = await loadConfig();
  const news = await createNewsObject(config.topics);
  await saveNewsObject(news, config.outputFile, config.append);
  console.log('Athena fetch complete!');
}

runAthena();
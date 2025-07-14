Athena: Your Autonomous News Fetcher 🚀
Welcome to Athena, a sleek and powerful tool to automate news curation for your newsletters! Powered by the NewsData.io API, Athena fetches the latest articles on topics like business, tech, sports, and more, saving them to a JSON file for easy integration into your newsletter pipeline. Whether you're building a newsletter empire or just exploring news automation, Athena is your go-to solution. Let’s get started! 🎉
Features

Customizable Topics: Fetch news for any of NewsData.io’s categories (e.g., business, politics, technology).
Flexible Output: Save articles to a customizable JSON file with append mode to avoid duplicates.
Open-Source Ready: MIT-licensed, with a simple setup for developers and non-coders alike.
Command-Line Support: Run quick topic fetches via CLI (e.g., node athena.js --topics business,sports).
Lightweight: Built with Node.js, requiring minimal dependencies (axios, dotenv).

Prerequisites

Node.js (v16 or later): Download here.
NewsData.io API Key: Sign up for a free account at newsdata.io to get your API key (free tier: 200 requests/day).
A text editor (e.g., VS Code) and terminal (e.g., PowerShell, Terminal).

Installation

Clone the Repository:
git clone https://github.com/yourusername/athena.git
cd athena


Install Dependencies:
npm install


Set Up Environment:

Create a .env file in the athena folder.
Add your NewsData.io API key:NEWS_DATA_IO_API_KEY=your_api_key_here




Configure Topics:

Open config.json and set your desired topics (choose from: business, crime, domestic, education, entertainment, environment, food, health, lifestyle, politics, science, sports, technology, top, tourism, world, other). Example:{
  "topics": ["business", "sports"],
  "outputFile": "news.json",
  "append": true
}





Usage
Run Athena to fetch news and save it to your specified output file:
npm start

This reads config.json, fetches up to 10 articles per topic, and saves them to news.json (or your custom file).
Command-Line Option:Fetch specific topics directly via CLI:
node athena.js --topics business,technology

This overrides config.json topics for a one-time fetch.
Output Example (news.json):
{
  "business": [
    {
      "title": "Stock Market Surges",
      "link": "https://example.com/article",
      "summary": "Markets hit record highs...",
      "published": "2025-07-14T12:00:00Z",
      "source": "reuters",
      "image": null,
      "category": "business"
    },
    ...
  ],
  "technology": [...]
}

Customization

Change Topics: Edit config.json or use the --topics CLI flag.
Output File: Set outputFile in config.json (e.g., "custom_news.json").
Append Mode: Set "append": true in config.json to add new articles without overwriting.

Troubleshooting

Invalid API Key: Ensure your NEWS_DATA_IO_API_KEY in .env is correct.
No Articles Fetched: Check topic names in config.json or CLI (must match NewsData.io categories).
File Not Saved: Verify write permissions in the athena folder.
Rate Limit Exceeded: Free tier allows 200 requests/day. Reduce topic count or wait 24 hours.

Contributing
Want to make Athena even better? Check out our CONTRIBUTING.md for guidelines on submitting issues, pull requests, or new features!
License
Athena is open-source under the MIT License. Use it, modify it, share it—build something awesome!
What's Next?
Athena is the first step in an autonomous newsletter system. Stay tuned for:

Stage 2: A dashboard to curate articles into a "feed" object.
Stage 3: A minimalist newsletter builder for automated emails.

Got questions or ideas? Open an issue on GitHub or tweet us at @yourusername. Let’s build a newsletter empire together! 🌟
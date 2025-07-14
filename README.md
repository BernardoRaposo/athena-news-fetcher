🎉 Athena: The Ultimate News Fetching Beast! 🚀
 

Welcome to Athena, your autonomous news-fetching powerhouse! 🌟 Powered by the NewsData.io API, this sleek tool grabs the latest articles on topics like business, tech, or sports, saving them in a dazzling JSON file for your newsletter empire. Ready to automate like a pro? Let’s dive in! 💥

🌠 Why Athena Rocks?

🔧 Customizable Topics: Pick from 17 epic categories (e.g., business, sports, tech)!
💾 Flexible Output: Save to any JSON file with append magic to avoid duplicates.
🌐 Open-Source Vibes: MIT-licensed, free for all to remix and rule!
⌨️ CLI Power: Quick topic switches with node athena.js --topics sports,tech.
⚡ Lightweight: Runs on Node.js with just axios and dotenv.


🎨 Get Started: Your Mission Begins
🛠️ Prerequisites

Node.js (v16+): Grab it here! ✅
NewsData.io API Key: Snag a free one at newsdata.io (200 reqs/day). 🔑
A text editor (VS Code rocks!) and terminal (PowerShell or Terminal).

🚀 Installation

Clone the Repo:git clone https://github.com/BernardoRaposo/athena-news-fetcher
cd athena


Install the Goods:npm install


Set Up Your Secret Weapon:
Create a .env file in athena.
Drop your API key:NEWS_DATA_IO_API_KEY=your_api_key_here




Customize Your Quest:
Edit config.json with your topics (e.g., ["business", "sports"]):{
  "topics": ["business", "sports"],
  "outputFile": "news.json",
  "append": true
}






⚡ Unleash Athena!
🎮 Run the Magic
Fire up Athena to fetch news:
npm start

Watch it grab up to 10 articles per topic and save to news.json (or your custom file)!
💻 CLI Superpower
Switch topics on the fly:
node athena.js --topics business,technology

Boom—instant news for your chosen categories!
🌟 Sample Output (news.json)
{
  "business": [
    {
      "title": "Stock Market Soars! 🌟",
      "link": "https://example.com/article",
      "summary": "Markets hit new highs...",
      "published": "2025-07-14T12:00:00Z",
      "source": "reuters",
      "image": null,
      "category": "business"
    },
    ...
  ],
  "technology": [...]
}


🎨 Customize Your Empire

🔄 Change Topics: Tweak config.json or use --topics CLI flag.
📁 Output File: Set outputFile in config.json (e.g., "epic_news.json").
➕ Append Mode: Enable "append": true to stack articles over time.


🛡️ Troubleshooting Tips



Issue
Fix



Invalid API Key
Check .env and your NewsData.io key.


No Articles
Verify topics match allowed categories.


File Not Saved
Ensure write permissions in athena.


Rate Limit Hit
Wait 24h (200 reqs/day free tier).



🤝 Join the Athena Revolution!
Want to level up Athena? Check our CONTRIBUTING.md to report bugs, suggest features, or submit code. Open an issue or PR—we’re building this empire together! 💪
📜 License
Athena is yours under the MIT License. Remix it, share it, conquer with it! 🌍
🌅 What’s Next?
Athena v1 is just the start! Look out for:

Stage 2: A dazzling dashboard to curate your "feed" object.
Stage 3: A newsletter builder to automate emails.

Got ideas? Hit us up on GitHub Issues or tweet @sir__fox. Let’s rule the newsletter world! 🌠
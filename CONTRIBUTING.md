Contributing to Athena
Thank you for wanting to contribute to Athena, the autonomous news fetcher for newsletters! Your help can make Athena even better for building newsletter empires. This guide explains how to contribute, whether you're reporting bugs, suggesting features, or submitting code.
How to Contribute
1. Reporting Bugs

Check the Issues page to ensure the bug hasn’t been reported.
Open a new issue with:
Title: Clear description (e.g., "Error when topic is invalid").
Details: Steps to reproduce, expected behavior, actual behavior, and environment (e.g., Node.js version, OS).
Screenshots/Logs: If applicable.



2. Suggesting Features

Open an issue with the label "enhancement."
Describe the feature, why it’s useful, and how it fits Athena’s goal of automating newsletters.
Example: "Add support for RSS feeds to supplement NewsData.io."

3. Submitting Code

Fork the Repository:git clone https://github.com/yourusername/athena.git
cd athena


Create a branch for your changes:git checkout -b feature/your-feature-name


Make changes, ensuring:
Code follows existing style (e.g., 2-space indentation, JSDoc comments).
Changes are tested locally (run npm start).
No sensitive data (e.g., API keys) is included.


Commit with clear messages:git commit -m "Add feature X to support Y"


Push and create a pull request (PR):git push origin feature/your-feature-name


Describe the PR’s purpose and link to related issues.
Ensure tests pass (if added in the future).



Code Guidelines

Use Node.js best practices (e.g., async/await, error handling).
Keep dependencies minimal (currently axios, dotenv).
Add JSDoc comments for new functions.
Avoid breaking changes to news.json structure for compatibility.

Development Setup

Follow the README for setup.
Install dependencies: npm install.
Test changes: npm start.

Community Guidelines

Be respectful and inclusive.
Provide constructive feedback in issues/PRs.
Contact maintainers via GitHub issues for questions.

License
Contributions are licensed under the MIT License, ensuring Athena remains open and free.
Thanks for contributing to Athena! Let’s automate the news and build newsletter empires together! 🚀
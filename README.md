# TrimLink - URL Shortener Bot

TrimLink is a Telegram bot built to help users shorten URLs using the TinyURL API. You can easily shorten any long URL and receive a shortened version right in your Telegram chat.

## Features

- Shorten any valid URL using the `/shorten` command.
- Simple and easy interaction through Telegram bot.
- Validates URLs to ensure the correct format is provided.

## How It Works

TrimLink integrates with the TinyURL API to generate shortened URLs. Users can send a command to the bot in Telegram to shorten their long URLs.

### Bot Commands:

- `/shorten <url>` - Shortens the provided URL and returns a shortened version.
  - Example: `/shorten https://www.example.com`

### URL Validation:

The bot checks if the provided URL is in a valid format before attempting to shorten it. If the URL is invalid, it prompts the user to provide a valid URL.

## How To Use

1. **Clone or download** the repository.
2. **Set up** your Telegram bot and get the bot token from [BotFather](https://core.telegram.org/bots#botfather).
3. **Deploy the script** on Google Apps Script.
4. **Set your webhook** URL in the script to link the bot with your Telegram bot.
5. Start using the bot in Telegram by sending the `/shorten` command with a valid URL.

## Code Overview

1. **`setWebhook`**: Sets the webhook URL to connect the bot to Telegram.
2. **`doPost`**: Handles incoming messages, processes the `/shorten` command, validates URLs, and shortens them using the TinyURL API.
3. **`isValidUrl`**: A helper function to validate the URL format.
4. **`shortenUrl`**: Shortens the provided URL using TinyURL's API.
5. **`sendMessage`**: Sends a message to the user via Telegram.

## Example Usage:

- **Command**: `/shorten https://www.example.com`
- **Response**: `✅ Shortened URL: https://tinyurl.com/example`

## Prerequisites

- **Google Apps Script**: Required to deploy the bot.
- **Telegram Bot Token**: You will need to create a bot on Telegram using [BotFather](https://core.telegram.org/bots#botfather) to get the token.
- **TinyURL API**: Used for shortening URLs. No registration is required.

## Contributing

Feel free to fork the project, open issues, and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy shortening! 🎉

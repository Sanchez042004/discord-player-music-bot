# Discord Player Bot

It is a Discord music bot built using [discord-player](https://npm.im/discord-player) & [discord.js](https://npm.im/discord.js) library.

![Discord.js Version](https://img.shields.io/github/package-json/dependency-version/LakhindarPal/discord-player-bot/discord.js)
![Discord Player Version](https://img.shields.io/github/package-json/dependency-version/LakhindarPal/discord-player-bot/discord-player)

![License](https://img.shields.io/github/license/LakhindarPal/discord-player-bot)
![Contributors](https://img.shields.io/github/contributors/lakhindarpal/discord-player-bot)
![Stars](https://img.shields.io/github/stars/LakhindarPal/discord-player-bot)

[![Support](https://img.shields.io/badge/Discord-Support-blue)](https://discord.gg/8yaJBZBQTA)

## Disclaimer (Terms of Use)

This project is intended for educational and entertainment purposes only. It is not designed to encourage or facilitate any form of unfair usage. If you represent a supported streaming platform and have concerns about the bot's functionality, please reach out to us via GitHub Discussions or our support channels for a constructive dialogue.

## Disclaimer (if self-hosted)

- **Prohibited Use**: Uploading this bot to any bot listing service such as Discord Bot List or top.gg is strictly prohibited.
- **Community Hosting Only**: You are authorized to host this bot exclusively for your community's use.
- **Security Responsibility**: Hosting the bot on public platforms like Glitch.com or repl.it poses a risk of bot token exposure. In the event of such an incident, you are solely responsible for any consequences.

We appreciate your cooperation and understanding in adhering to these guidelines.

## Installation

### Before You Start

Before diving into the setup process, ensure you have the following prerequisites:

- **Node.js**: Version 20 or higher is required. If you haven't already installed Node.js, you can download it from the [official website](https://nodejs.org/en/download/).
- **NPM**: A package manager is required. NPM comes bundled with Node.js, so no separate installation is required.
- **FFmpeg or Avconv**: Ensure you have FFmpeg or Avconv installed for media transcoding. You can download (recommended) FFmpeg from the [official website](https://ffmpeg.org/download.html) or install it via npm `npm i ffmpeg-static`.

### Config & Setup

Before start make sure you've done the above process.

## Clone the repository

```bash
git clone lakhindarpal/discord-player-bot
```

```bash
cd discord-player-bot
```

To configure the Discord Player Bot, you'll need to set up environment variables in a `.env` file. Here's how to do it:

1. **Create `.env` File**: In the root directory of the cloned repository, create a new file named `.env`.

3. **Use `.env.sample` as Template**: Open the `.env.sample` file provided in the repository. This file contains a template with placeholders for environment variables.

4. **Fill in Environment Variables**: Replace the placeholder values in the `.env.sample` file with your actual values. Refer to the comments in the file for guidance on each variable.

 ```bash
# Discord Bot Token
DISCORD_TOKEN="your_token"

# Development Guild Id
DEV_GUILD="your_server_id"

# Developer IDs (comma-separated)
DEV_IDS="your_id"

# Support Server Invite Link
SUPPORT_SERVER="https://github.com/LakhindarPal/discord-player-bot"

# Register Slash Commands (true/false)
REGISTER_COMMANDS=true

# Development Mode (true/false)
DEVELOPMENT_MODE=false
```

5. **Save as `.env`**: After filling in the environment variables, save the file as `.env` in the same directory. This file will be used by the bot to load configuration during runtime.

6. **Review Configuration**: Double-check the configuration in the `.env` file to ensure that all necessary variables are properly set.

By following these steps and customizing the `.env` file with your specific configuration, you can effectively set up the Discord Player Bot according to your requirements.

```node
node src/index.js
```

### Docker Installation

If you prefer to use Docker for deploying the Discord Player Bot, follow these steps:

1. **Fill the `.env` File**: Ensure that you have filled out the necessary environment variables in the `.env` file as described above.

2. **Build Docker Image**: Run the following command to build the Docker image:

   ```bash
   docker build -t your_docker_image_name .
   ```

   This command will use the Dockerfile provided in the repository to build the Docker image.

3. **Run Docker Container**: Once the Docker image is built successfully, you can run the Docker container using the following command:

   ```bash
   docker run --env-file .env your_docker_image_name
   ```

   Replace `your_docker_image_name` with the name of the Docker image you built in the previous step.

4. **Enjoy Dockerized Discord Player Bot**: Your Discord Player Bot should now be running in a Docker container, ready to provide music playback functionality in your Discord server.

By following these steps, you can deploy the Discord Player Bot using Docker, providing a convenient and isolated environment for running the bot.

## Usage

Once the bot is running and added to your Discord server, you can use the features it provides.
For detailed command usage and examples, please refer to the [Commands](./COMMANDS.md) documentation.

## Contributing

1. [Fork the repo](https://github.com/LakhindarPal/discord-player-bot/fork)
2. Install the dependencies (`npm install`)
3. Create the feature branch (`git checkout -b my-cool-feature`)
4. Commit your changes (`git commit -m "Added a cool new feature!"`)
5. Push to your branch (`git push origin my-cool-feature`)
6. [Open a pull request](https://github.com/LakhindarPal/discord-player-bot/pulls)

## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details.

## Support

If you need further help with this project, to get support faster you can join the Discord server by just clicking [here](https://discord.gg/8yaJBZBQTA).

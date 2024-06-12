import "dotenv/config";
import "./modules/checkEnv.js";

import { Client, Collection, GatewayIntentBits } from "discord.js";
import server from '../keep_alive.js';
import { Player } from "discord-player";
import { default as DeezerExtractor } from "discord-player-deezer";
import { default as TidalExtractor } from "discord-player-tidal";

import { loadEvents } from "./handlers/event.js";

class ExtendedClient extends Client {
  commands = new Collection();
  cooldowns = new Collection();

  constructor(options) {
    super(options);
  }
}

(async () => {
  const client = new ExtendedClient({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates],
  });

  const player = new Player(client);
  await player.extractors.register(DeezerExtractor);
  await player.extractors.register(TidalExtractor);
  await player.extractors.loadDefault();

  await loadEvents(client);

  server.listen(8080, () => {
    console.log('Server is listening on port 8080');
  });

  try {
    await client.login(process.env.DISCORD_TOKEN);
    console.log('Bot logged in successfully');
  } catch (error) {
    console.error('Failed to log in:', error);
  }

  // Prevent crash on unhandled promise rejection
  process.on("unhandledRejection", (reason) => console.error(reason));
  // Prevent crash on uncaught exception
  process.on("uncaughtException", (error) => console.error(error));
  // Prevent crash on uncaught warning
  process.on("warning", (warning) => console.error(warning));
})();


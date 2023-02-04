import dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import { handleInteractionCreate, handleMessageCreate } from './handler';
import { Player } from 'discord-player';

dotenv.config();

// Create the bot

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
  ],
});

const player = new Player(client, {
  ytdlOptions: {
    quality: 'highestaudio',
    highWaterMark: 1 << 25,
  },
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} - Good bot`);
});

client.on('messageCreate', (msg) => handleMessageCreate(msg));

client.on('interactionCreate', (int) => handleInteractionCreate(int, player));

client.login(process.env.CLIENT_TOKEN);

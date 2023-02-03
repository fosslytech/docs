import dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import { handleInteractionCreate, handleMessageCreate } from './handler';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} - Good bot`);
});

client.on('messageCreate', handleMessageCreate);

client.on('interactionCreate', handleInteractionCreate);

client.login(process.env.CLIENT_TOKEN);

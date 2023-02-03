import dotenv from 'dotenv';
import { REST, Routes } from 'discord.js';

dotenv.config();

// Commands

const commands = [
  {
    name: 'hi',
    description: 'Replies with hey!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN || '');

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID || '',
        process.env.GUILD_ID || ''
      ),
      {
        body: commands,
      }
    );

    console.log('Slash commands registered');
  } catch (error) {
    console.log('Error has occurred: ' + error);
  }
})();

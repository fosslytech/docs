import dotenv from 'dotenv';
import { REST, Routes } from 'discord.js';
import {
  slashCommandPlay,
  slashCommandExit,
  slashCommandPause,
  slashCommandQueue,
  slashCommandResume,
  slashCommandSkip,
} from './handler/player';

import { slashCommandNeofetch } from './handler/shell/neofetch';
import { slashCommandCowsay } from './handler/shell/cowsay';
import { slashCommandPwd } from './handler/shell/pwd';

dotenv.config();

// Commands

const commands = [
  {
    name: 'hi',
    description: 'Replies with Hey!',
  },

  // Shell
  slashCommandNeofetch.toJSON(),
  slashCommandCowsay.toJSON(),
  slashCommandPwd.toJSON(),

  // Music
  slashCommandPlay.toJSON(),
  slashCommandPause.toJSON(),
  slashCommandExit.toJSON(),
  slashCommandQueue.toJSON(),
  slashCommandResume.toJSON(),
  slashCommandSkip.toJSON(),
];

const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN || '');

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID || ''),
      // Routes.applicationGuildCommands(process.env.CLIENT_ID || '', process.env.GUILD_ID || ''),
      {
        body: commands,
      }
    );

    console.log('Slash commands registered');
  } catch (error) {
    console.log('Error has occurred: ' + error);
  }
})();

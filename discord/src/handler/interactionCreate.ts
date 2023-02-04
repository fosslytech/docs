import { Player } from 'discord-player';
import { Interaction } from 'discord.js';
import { formatTime, getLinuxDistro } from '../utils';
import {
  handleCommandExit,
  handleCommandPause,
  handleCommandPlay,
  handleCommandQueue,
  handleCommandResume,
  handleCommandSkip,
} from './player';
import { handleCommandCowsay } from './shell/cowsay';
import { handleCommandNeofetch } from './shell/neofetch';

export const handleInteractionCreate = async (int: Interaction, player: Player) => {
  if (!int.isChatInputCommand()) return;

  switch (int.commandName) {
    case 'hi':
      int.reply('Hey!');
      break;

    // Shell

    case 'neofetch':
      handleCommandNeofetch(int);
      break;

    case 'cowsay':
      handleCommandCowsay(int);
      break;

    // Music player

    case 'play':
      handleCommandPlay(int, player);
      break;

    case 'pause':
      handleCommandPause(int, player);
      break;

    case 'resume':
      handleCommandResume(int, player);
      break;

    case 'skip':
      handleCommandSkip(int, player);
      break;

    case 'queue':
      handleCommandQueue(int, player);
      break;

    case 'exit':
      handleCommandExit(int, player);
      break;

    default:
      break;
  }
};

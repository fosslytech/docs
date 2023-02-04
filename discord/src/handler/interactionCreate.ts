import { Player } from 'discord-player';
import { Interaction } from 'discord.js';
import {
  handleCommandExit,
  handleCommandPause,
  handleCommandPlay,
  handleCommandQueue,
  handleCommandResume,
  handleCommandSkip,
} from './player';

export const handleInteractionCreate = async (int: Interaction, player: Player) => {
  if (!int.isChatInputCommand()) return;

  switch (int.commandName) {
    case 'hi':
      int.reply('Hey!');
      break;

    case 'neofetch':
      int.reply(`
      Row 1,

      Row 3
      `);
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

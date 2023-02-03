import { Interaction } from 'discord.js';

export const handleInteractionCreate = async (int: Interaction) => {
  if (!int.isChatInputCommand()) return;

  switch (int.commandName) {
    case 'hi':
      int.reply('Hey!');
      break;

    default:
      break;
  }
};

import { Message } from 'discord.js';

export const handleMessageCreate = async (msg: Message) => {
  // So that the bot doesn't accidentally reply to itself
  if (msg.author.bot) return;

  switch (msg.content) {
    case 'I':
      msg.reply('use Arch, btw!');
      break;

    default:
      break;
  }
};

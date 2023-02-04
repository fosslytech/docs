import { Player } from 'discord-player';
import { Interaction, SlashCommandBuilder } from 'discord.js';

export const slashCommandExit = new SlashCommandBuilder()
  .setName('exit')
  .setDescription('Kick the bot from the channel.');

export const handleCommandExit = async (int: Interaction, player: Player) => {
  if (!int.isChatInputCommand() || !int.guildId) return;

  // Get the current queue
  const queue = player.getQueue(int.guildId);

  if (!queue) {
    await int.reply('There are no songs in the queue');
    return;
  }

  // Deletes all the songs from the queue and exits the channel
  queue.destroy();

  await int.reply('Why you do this to me?');
};

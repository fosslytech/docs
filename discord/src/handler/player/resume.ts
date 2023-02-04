import { Player } from 'discord-player';
import { Interaction, SlashCommandBuilder } from 'discord.js';

export const slashCommandResume = new SlashCommandBuilder()
  .setName('resume')
  .setDescription('Resumes the current song');

export const handleCommandResume = async (int: Interaction, player: Player) => {
  if (!int.isChatInputCommand() || !int.guildId) return;

  // Get the queue for the server
  const queue = player.getQueue(int.guildId);

  // Check if the queue is empty
  if (!queue) {
    await int.reply('No songs in the queue');
    return;
  }

  // Pause the current song
  queue.setPaused(false);

  await int.reply('Player has been resumed.');
};

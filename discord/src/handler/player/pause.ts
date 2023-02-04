import { Player } from 'discord-player';
import { Interaction, SlashCommandBuilder } from 'discord.js';

export const slashCommandPause = new SlashCommandBuilder()
  .setName('pause')
  .setDescription('Pauses the current song');

export const handleCommandPause = async (int: Interaction, player: Player) => {
  if (!int.isChatInputCommand() || !int.guildId) return;

  // Get the queue for the server
  const queue = player.getQueue(int.guildId);

  // Check if the queue is empty
  if (!queue) {
    await int.reply('There are no songs in the queue');
    return;
  }

  // Pause the current song
  queue.setPaused(true);

  await int.reply('Player has been paused.');
};

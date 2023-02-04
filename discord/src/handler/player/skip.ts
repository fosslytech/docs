import { Player } from 'discord-player';
import { EmbedBuilder, Interaction, SlashCommandBuilder } from 'discord.js';

export const slashCommandSkip = new SlashCommandBuilder()
  .setName('skip')
  .setDescription("Skips the current song ( it's bugged, skips 2 songs )");

export const handleCommandSkip = async (int: Interaction, player: Player) => {
  if (!int.isChatInputCommand() || !int.guildId) return;

  // Get the queue for the server
  const queue = player.getQueue(int.guildId);

  // If there is no queue, return
  if (!queue) {
    await int.reply('There are no songs in the queue');
    return;
  }

  const currentSong = queue.current;

  // Skip the current song
  queue.skip();

  // Return an embed to the user saying the song has been skipped
  await int.reply({
    embeds: [
      new EmbedBuilder()
        .setDescription(`${currentSong.title} has been skipped!`)
        .setThumbnail(currentSong.thumbnail),
    ],
  });
};

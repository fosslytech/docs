import { Player } from 'discord-player';
import { EmbedBuilder, Interaction, SlashCommandBuilder } from 'discord.js';

export const slashCommandQueue = new SlashCommandBuilder()
  .setName('queue')
  .setDescription('shows first 10 songs in the queue');

export const handleCommandQueue = async (int: Interaction, player: Player) => {
  if (!int.isChatInputCommand() || !int.guildId) return;

  const queue = player.getQueue(int.guildId);

  // check if there are songs in the queue
  if (!queue || !queue.playing) {
    await int.reply('There are no songs in the queue');
    return;
  }

  // Get the first 10 songs in the queue
  const queueString = queue.tracks
    .slice(0, 10)
    .map((song, i) => {
      return `${i}) [${song.duration}]\` ${song.title} - <@${song.requestedBy.id}>`;
    })
    .join('\n');

  // Get the current song
  const currentSong = queue.current;

  await int.reply({
    embeds: [
      new EmbedBuilder()
        .setDescription(
          `**Currently Playing**\n` +
            (currentSong
              ? `\`[${currentSong.duration}]\` ${currentSong.title} - <@${currentSong.requestedBy.id}>`
              : 'None') +
            `\n\n**Queue**\n${queueString}`
        )
        // @ts-ignore
        .setThumbnail(currentSong?.setThumbnail),
    ],
  });
};

import { Player, QueryType } from 'discord-player';
import { EmbedBuilder, Interaction, SlashCommandBuilder } from 'discord.js';

export const slashCommandPlay = new SlashCommandBuilder()
  .setName('play')
  .setDescription('play a song from [REDACTED].')
  .addSubcommand((subcommand) =>
    subcommand
      .setName('song')
      .setDescription('Plays a single song from [REDACTED]')
      .addStringOption((option) =>
        option.setName('query').setDescription('search for the song or link').setRequired(true)
      )
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName('playlist')
      .setDescription('Plays a playlist from [REDACTED]')
      .addStringOption((option) =>
        option.setName('url').setDescription("the playlist's url").setRequired(true)
      )
  );

export const handleCommandPlay = async (int: Interaction, player: Player) => {
  if (!int.isChatInputCommand() || !int.guild) return;

  // The reply may take longer than 3s ( discord limit )
  int.deferReply({ ephemeral: true });

  // Make sure the user is inside a voice channel
  //@ts-ignore
  const voiceChannel = int?.member?.voice?.channel;

  if (!voiceChannel) return int.reply('You need to be in a Voice Channel to play a song.');

  // Create a play queue for the server
  const queue = await player.createQueue(int.guild);

  // Wait until you are connected to the channel
  if (!queue.connection) await queue.connect(voiceChannel);

  let embedBuilder = new EmbedBuilder();

  // Switch for the subcommand
  // song || playlist
  switch (int.options.getSubcommand()) {
    case 'song':
      const query = int.options.getString('query');
      const isLink = query?.includes('http');

      if (!query) return int.reply('No query');

      // Search for the song using the discord-player
      const res1 = await player.search(query, {
        requestedBy: int.user,
        searchEngine: isLink ? QueryType.YOUTUBE_VIDEO : QueryType.AUTO,
      });

      // finish if no tracks were found
      if (res1.tracks.length === 0) return int.reply('No results');

      // Add the track to the queue
      const song1 = res1.tracks[0];
      await queue.addTrack(song1);

      embedBuilder
        .setDescription(`**[${song1.title}](${song1.url})** has been added to the Queue`)
        .setThumbnail(song1.thumbnail)
        .setFooter({ text: `Duration: ${song1.duration}` });

      break;

    case 'playlist':
      // Search for the playlist using the discord-player
      let url2 = int.options.getString('url');

      if (!url2) return int.reply('No url');

      const res2 = await player.search(url2, {
        requestedBy: int.user,
        searchEngine: QueryType.YOUTUBE_PLAYLIST,
      });

      if (res2.tracks.length === 0) return int.reply(`No playlists found with ${url2}`);

      // Add the tracks to the queue
      const playlist = res2.playlist;
      await queue.addTracks(res2.tracks);

      embedBuilder
        .setDescription(
          `**${res2.tracks.length} songs from [${playlist?.title}](${playlist?.url})** have been added to the Queue`
        )
        .setThumbnail(playlist?.thumbnail || '');

      break;

    default:
      break;
  }

  // Play the song
  if (!queue.playing) await queue.play();

  // Respond with the embed containing information about the player
  await int.followUp({
    embeds: [embedBuilder.toJSON() || { title: 'Embed builder broke' }],
  });
};

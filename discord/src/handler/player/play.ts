import { Player, QueryType } from 'discord-player';
import { EmbedBuilder, Interaction, SlashCommandBuilder } from 'discord.js';

export const slashCommandPlay = new SlashCommandBuilder()
  .setName('play')
  .setDescription('play a song from YouTube.')
  .addSubcommand((subcommand) =>
    subcommand
      .setName('search')
      .setDescription('Searches for a song and plays it')
      .addStringOption((option) =>
        option.setName('searchterms').setDescription('search keywords').setRequired(true)
      )
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName('playlist')
      .setDescription('Plays a playlist from YT')
      .addStringOption((option) =>
        option.setName('url').setDescription("the playlist's url").setRequired(true)
      )
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName('song')
      .setDescription('Plays a single song from YT')
      .addStringOption((option) =>
        option.setName('url').setDescription("the song's url").setRequired(true)
      )
  );

export const handleCommandPlay = async (int: Interaction, player: Player) => {
  if (!int.isChatInputCommand() || !int.guild) return;

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
  // song || playlist || search
  switch (int.options.getSubcommand()) {
    case 'song':
      let url1 = int.options.getString('url');

      if (!url1) return int.reply('No url');

      // Search for the song using the discord-player
      const res1 = await player.search(url1, {
        requestedBy: int.user,
        searchEngine: QueryType.YOUTUBE_VIDEO,
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

    case 'search':
      // Search for the song using the discord-player
      let url3 = int.options.getString('searchterms');

      if (!url3) return int.reply('No url');

      const result = await player.search(url3, {
        requestedBy: int.user,
        searchEngine: QueryType.AUTO,
      });

      // finish if no tracks were found
      if (result.tracks.length === 0) return int.editReply('No results');

      // Add the track to the queue
      const song3 = result.tracks[0];

      await queue.addTrack(song3);
      embedBuilder
        .setDescription(`**[${song3.title}](${song3.url})** has been added to the Queue`)
        .setThumbnail(song3.thumbnail)
        .setFooter({ text: `Duration: ${song3.duration}` });

      break;

    default:
      break;
  }

  // Play the song
  if (!queue.playing) await queue.play();

  // Respond with the embed containing information about the player
  await int.reply({
    embeds: [embedBuilder.toJSON()],
  });
};

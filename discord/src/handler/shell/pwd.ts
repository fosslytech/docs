import { Interaction, SlashCommandBuilder } from 'discord.js';

export const slashCommandPwd = new SlashCommandBuilder()
  .setName('pwd')
  .setDescription('print current directory');

export const handleCommandPwd = async (int: Interaction) => {
  if (!int.isChatInputCommand()) return;

  int.reply(`
\`\`\`shell

   ${process.cwd()}

\`\`\`
  `);
};

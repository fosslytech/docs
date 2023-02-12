import { Interaction, SlashCommandBuilder } from 'discord.js';

export const slashCommandCowsay = new SlashCommandBuilder()
  .setName('cowsay')
  .setDescription('Cowsay is a configurable talking cow')
  .addStringOption((option) =>
    option.setName('input').setDescription('what does the cow say').setRequired(true)
  );

export const handleCommandCowsay = async (int: Interaction) => {
  if (!int.isChatInputCommand()) return;

  const input = int.options.getString('input');

  const lines = `${Array.apply(null, Array(input?.length)).map(() => '-')}`.replace(/,/g, '');

  int.reply(`
\`\`\`shell

   -${lines}-
  < ${input} >
   -${lines}-

          \\   ^__^
           \\  (oo)\\_______
              (__)\\       )\\/\\
                  ||----w |
                  ||     ||

\`\`\`
  `);
};

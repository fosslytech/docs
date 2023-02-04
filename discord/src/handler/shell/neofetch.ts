import { Interaction, SlashCommandBuilder } from 'discord.js';
import { formatTime, getLinuxDistro } from '../../utils';

import os from 'os';

export const slashCommandNeofetch = new SlashCommandBuilder()
  .setName('neofetch')
  .setDescription('A command-line system information');

export const handleCommandNeofetch = async (int: Interaction) => {
  if (!int.isChatInputCommand() || !int.guildId) return;

  int.reply(`
\`\`\`yaml
         ==          OS         ${getLinuxDistro()} x86_64
        :oo-         Host       Compute Instance
       .oooo:        Kernel     ${os.release()}
      :oooooo-       Uptime     ${formatTime(process.uptime())}
     :ooo##ooo-      Shell      ${os.userInfo().shell}
    -ooo=  =ooo-     CPU        AMD EPYC 7601 (1) @ 2.199GHz
   =ooo#.  .#ooo-    GPU        00:01.0 Vendor 1234 Device 1111
  -+o.        .o+-   Memory     224MiB / 970MiB
\`\`\`
  `);
};

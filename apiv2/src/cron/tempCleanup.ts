import path from 'path';
import fs from 'fs/promises';

import { __dirname } from '../config';

export const cron_tempCleanup = async () => {
  const tempDir = path.join(__dirname, `/../temp`);

  for (const file of await fs.readdir(tempDir)) {
    if (file === '.gitkeep') continue;
    await fs.unlink(path.join(tempDir, file));
  }
};

import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cwd = path.join(process.cwd() + '/../');

  const changelogContent = await fs.readFile(cwd + '/CHANGELOG.md', 'utf8');

  res.status(200).json(changelogContent);
}

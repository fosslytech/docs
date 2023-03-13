import { Context } from 'elysia';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { IExtension, __dirname } from '../config';
import { sofficeConvert } from '../../lib/soffice';

// POST - /download
export const handleDownload = async (ctx: Context) => {
  const { query, body } = ctx;

  const parsedBody = typeof body === 'string' ? JSON.parse(body) : body;

  const { text } = parsedBody as { text: string };
  const { from: extIn, to: extOut } = query as { from: IExtension; to: IExtension };

  if (!text || !extOut || !extIn) return 'Invalid request';

  const uuid = uuidv4();

  const inputPath = path.join(__dirname, `/../temp/${uuid}.${extIn}`);
  const outputDir = path.join(__dirname, `/../temp`);

  // ----------------------------------------------------------------------------------------
  // Write a file to the /temp
  // ----------------------------------------------------------------------------------------

  await Bun.write(inputPath, text); // .html file

  await sofficeConvert({ extIn, extOut, inputPath, outputDir });

  const staticUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4001/temp'
      : 'https://api-eu.fossly.tech/docs/temp';

  return staticUrl + `/${uuid}.${extOut}`;
  // return Bun.file(path.join(outputDir, `/${uuid}.${extOut}`));
};

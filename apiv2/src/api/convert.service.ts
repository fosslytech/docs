import { Context } from 'elysia';
import { v4 as uuidv4 } from 'uuid';
import { sofficeConvert } from '../../lib/soffice';
import { __dirname } from '../config';
import path from 'path';

// POST - /convert
export const handleConvert = async (ctx: Context) => {
  const { query, body } = ctx;

  const { file } = body as { file: Blob };
  const { from: extIn, to: extOut } = query as { from: 'html' | 'odt' | 'ods'; to: 'html' | 'odt' | 'ods' };

  if (!file || !extOut) return 'Invalid request';

  const uuid = uuidv4();

  const inputPath = path.join(__dirname, `/../temp/${uuid}.${extIn}`);
  const outputDir = path.join(__dirname, `/../temp`);

  // ----------------------------------------------------------------------------------------
  // Write a file to the /temp
  // Convert to a given format
  // Read the file and send it back
  // ----------------------------------------------------------------------------------------

  await Bun.write(inputPath, file);

  sofficeConvert({ extIn, extOut, inputPath, outputDir });

  const result = await Bun.file(path.join(outputDir, `/${uuid}.${extOut}`)).text();

  return {
    roomName: uuid,
    output: result,
  };
};

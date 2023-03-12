import { Context } from 'elysia';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { __dirname } from '../config';
import { sofficeConvert } from '../../lib/soffice';

// POST - /download
export const handleDownload = async (ctx: Context) => {
  const { query, body } = ctx;

  const { file } = body as { file: Blob };
  const { from: extIn, to: extOut } = query as { from: 'html' | 'odt' | 'ods'; to: 'html' | 'odt' | 'ods' };

  if (!file || !extOut) return 'Invalid request';

  const uuid = uuidv4();

  const inputPath = path.join(__dirname, `/../temp/${uuid}.${extIn}`);
  const outputDir = path.join(__dirname, `/../temp`);

  // ----------------------------------------------------------------------------------------
  // Write a file to the /temp
  // ----------------------------------------------------------------------------------------

  return 'Download';
};

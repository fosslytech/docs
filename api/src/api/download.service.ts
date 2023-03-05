import { Request, ResponseToolkit } from '@hapi/hapi';
import { v4 as uuidv4 } from 'uuid';
import libre from 'libreoffice-convert';

import path from 'path';
import fs from 'fs';

import { promisify } from 'util';

const writeFileAsync = (path: string, data: string | NodeJS.ArrayBufferView) =>
  promisify(fs.writeFile)(path, data);

const convertAsync = promisify(libre.convert);

// ------------------------------------------------------------------------------------------
// Prepare a converted file for download
// ------------------------------------------------------------------------------------------

const prepareDownloadFunction = async (req: Request) => {
  const { text } = JSON.parse(req.payload as string);
  const { to: extOut } = req.query as { to: string };

  if (!text || !extOut) return 'Invalid request';

  const uuid = uuidv4();

  const filters = {
    odt: undefined,
    ods: 'calc8',
  }[extOut];

  // Breaks with pm2
  // const outputPath = path.join(process.cwd(), `/temp/${uuid}.${extOut}`);
  const outputPath = path.join(__dirname, `/../../temp/${uuid}.${extOut}`);

  // ----------------------------------------------------------------------------------------
  // Convert to given format
  // ----------------------------------------------------------------------------------------

  let convertBuff = await convertAsync(text, extOut, filters);

  await writeFileAsync(outputPath, convertBuff);

  return uuid;
};

// ------------------------------------------------------------------------------------------
// Download a converted file
// ------------------------------------------------------------------------------------------

const downloadFunction = async (req: Request, h: ResponseToolkit) => {
  const { uuid, to: extOut } = req.query;

  if (!uuid || !extOut) return 'Invalid request';

  // Breaks with pm2
  // const filePath = path.join(process.cwd(), `/temp/${uuid}.${extOut}`);
  const filePath = path.join(__dirname, `/../../temp/${uuid}.${extOut}`);

  // ----------------------------------------------------------------------------------------
  // Remove file after it's sent
  // ----------------------------------------------------------------------------------------

  setTimeout(() => {
    fs.unlinkSync(filePath);
  }, 1000);

  return h.file(filePath, {
    filename: 'output.odt',
  });
};

// ------------------------------------------------------------------------------------------
// Download document
// ------------------------------------------------------------------------------------------

export const prepareDownload = (req: Request) => {
  try {
    return prepareDownloadFunction(req);
  } catch (error) {
    return error || 'Error has occurred';
  }
};

export const download = (req: Request, h: ResponseToolkit) => {
  try {
    return downloadFunction(req, h);
  } catch (error) {
    return error || 'Error has occurred';
  }
};

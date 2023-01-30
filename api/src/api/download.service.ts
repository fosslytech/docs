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
  const { to: extOut } = req.query;

  if (!text || !extOut) return 'Invalid request';

  const uuid = uuidv4();

  const outputPath = path.join(process.cwd(), `/temp/${uuid}.${extOut}`);

  // ----------------------------------------------------------------------------------------
  // Convert to given format
  // ----------------------------------------------------------------------------------------

  let convertBuff = await convertAsync(text, extOut, undefined);

  await writeFileAsync(outputPath, convertBuff);

  return uuid;
};

// ------------------------------------------------------------------------------------------
// Download a converted file
// ------------------------------------------------------------------------------------------

const downloadFunction = async (req: Request, h: ResponseToolkit) => {
  const { uuid, to: extOut } = req.query;

  if (!uuid || !extOut) return 'Invalid request';

  const filePath = path.join(process.cwd(), `/temp/${uuid}.${extOut}`);

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

export const prepareDownload = (req: Request) => prepareDownloadFunction(req);

export const download = (req: Request, h: ResponseToolkit) => {
  try {
    return downloadFunction(req, h);
  } catch (error) {
    return 'Error has occurred';
  }
};

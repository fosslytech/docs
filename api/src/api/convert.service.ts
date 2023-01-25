import { Request, ResponseToolkit } from '@hapi/hapi';
import { v4 as uuidv4 } from 'uuid';

import path from 'path';
import fs from 'fs';
import libre from 'libreoffice-convert';
import util from 'util';

const readFileAsync = (path: string) => util.promisify(fs.readFile)(path, 'utf8');

const writeFileAsync = (path: string, data: string | NodeJS.ArrayBufferView) =>
  util.promisify(fs.writeFile)(path, data);

const convertAsync = util.promisify(libre.convert);

// ------------------------------------------------------------------------------------------
// Universal convert function
// ------------------------------------------------------------------------------------------

const universalConvertFunction = async (req: Request, extOut: string) => {
  const { file } = req.payload as any;

  const uuid = uuidv4();

  // const inputPath = path.join(process.cwd(), `/docs/${uuid}.${extIn}`);
  const outputPath = path.join(process.cwd(), `/docs/${uuid}.${extOut}`);

  // ------------------------------------------------------------------------------------------
  // Read and convert to given format
  // ------------------------------------------------------------------------------------------

  let convertBuff2 = await convertAsync(file, extOut, undefined);

  await writeFileAsync(outputPath, convertBuff2);

  // ------------------------------------------------------------------------------------------
  // Read and convert to given format
  // ------------------------------------------------------------------------------------------

  const outputFile = await readFileAsync(outputPath);

  // ------------------------------------------------------------------------------------------
  // Remove input and output files
  // ------------------------------------------------------------------------------------------

  fs.unlinkSync(outputPath);

  return {
    roomName: uuid,
    output: outputFile,
  };
};

// ------------------------------------------------------------------------------------------
// Convert any file ( if possible ) to .html
// ------------------------------------------------------------------------------------------
export const convert2Html = (req: Request) => universalConvertFunction(req, 'html');

// ------------------------------------------------------------------------------------------
// Convert any file ( if possible ) to .odt
// ------------------------------------------------------------------------------------------
export const convert2Odt = (req: Request) => universalConvertFunction(req, 'odt');

// ------------------------------------------------------------------------------------------
// Get new doc
// ------------------------------------------------------------------------------------------
export const getNewDoc = (req: Request) => {
  const uuid = uuidv4();

  return {
    roomName: uuid,
    output: '',
  };
};

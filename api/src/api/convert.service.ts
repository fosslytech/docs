import { Request } from '@hapi/hapi';
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

const universalConvertFunction = async (req: Request) => {
  const { file } = req.payload as { file: any };
  const { to: extOut } = req.query as { to: string };

  if (!file || !extOut) return 'Invalid request';

  const uuid = uuidv4();

  const outputPath = path.join(process.cwd(), `/temp/${uuid}.${extOut}`);

  // ----------------------------------------------------------------------------------------
  // Read and convert to given format
  // ----------------------------------------------------------------------------------------

  let convertBuff = await convertAsync(file, extOut, undefined);

  await writeFileAsync(outputPath, convertBuff);

  // ----------------------------------------------------------------------------------------
  // Read and convert to given format
  // ----------------------------------------------------------------------------------------

  const outputFile = await readFileAsync(outputPath);

  // ----------------------------------------------------------------------------------------
  // Remove input and output files
  // ----------------------------------------------------------------------------------------

  fs.unlinkSync(outputPath);

  return {
    roomName: uuid,
    output: outputFile,
  };
};

// ------------------------------------------------------------------------------------------
// Convert any file ( if possible ) to any file ( if possible )
// ------------------------------------------------------------------------------------------
export const convert = (req: Request) => universalConvertFunction(req);

// ------------------------------------------------------------------------------------------
// Get new doc
// ------------------------------------------------------------------------------------------
export const getNewDoc = () => {
  const uuid = uuidv4();

  return {
    roomName: uuid,
    output: '',
  };
};

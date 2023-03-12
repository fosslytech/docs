import { Context } from 'elysia';
import * as convertSvc from './convert.service';
import * as downloadSvc from './download.service';

// POST - /convert
export const handleConvert = async (ctx: Context) => {
  try {
    return await convertSvc.handleConvert(ctx);
  } catch (error) {}
};

// POST - /download
export const handleDownload = async (ctx: Context) => {
  try {
    return await downloadSvc.handleDownload(ctx);
  } catch (error) {}
};

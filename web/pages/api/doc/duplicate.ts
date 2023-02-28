import apiHandler from '@server/apiHandler';
import { docApi_duplicateDocument } from '@server/doc/duplicate';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    POST: { handler: docApi_duplicateDocument, checkAuth: true },
  })(req, res);

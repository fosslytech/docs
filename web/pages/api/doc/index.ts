import apiHandler from '@server/apiHandler';
import { docApi_createDocument } from '@server/doc/create/index';
import { docApi_selectDocument } from '@server/doc/select';
import { docApi_deleteDocument } from '@server/doc/delete/index';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    GET: { handler: docApi_selectDocument, checkAuth: true },
    POST: { handler: docApi_createDocument, checkAuth: true },
    DELETE: { handler: docApi_deleteDocument, checkAuth: true },
  })(req, res);

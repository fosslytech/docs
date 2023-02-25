import apiHandler from '@server/apiHandler';
import { docApi_createDocumentPassword } from '@server/doc/create/password';
import { docApi_deleteDocumentPassword } from '@server/doc/delete/password';
import { docApi_updateDocumentPassword } from '@server/doc/update/password';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    POST: { handler: docApi_createDocumentPassword, checkAuth: true },
    PATCH: { handler: docApi_updateDocumentPassword, checkAuth: true },
    DELETE: { handler: docApi_deleteDocumentPassword, checkAuth: true },
  })(req, res);

import { IFC } from '@ts/global.types';
import React from 'react';
import { DocCTXProvider } from './doc/CTX';
import { GlobalCTXProvider } from './global/CTX';

const JoinedCTXProvider: React.FC<IFC> = ({ children }) => {
  return (
    <GlobalCTXProvider>
      <DocCTXProvider>{children}</DocCTXProvider>
    </GlobalCTXProvider>
  );
};

export default JoinedCTXProvider;

import { IFC } from '@ts/global.types';
import React from 'react';
import { DocContentCTXProvider } from './doc-content/CTX';
import { DocCTXProvider } from './doc/CTX';
import { GlobalCTXProvider } from './global/CTX';

const JoinedCTXProvider: React.FC<IFC> = ({ children }) => {
  return (
    <GlobalCTXProvider>
      <DocCTXProvider>
        <DocContentCTXProvider>{children}</DocContentCTXProvider>
      </DocCTXProvider>
    </GlobalCTXProvider>
  );
};

export default JoinedCTXProvider;

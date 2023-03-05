import { IFC } from '@ts/global.types';
import React from 'react';
import { DocCTXProvider } from './doc/CTX';
import { YjsCTXProvider } from './yjs/CTX';
import { GlobalCTXProvider } from './global/CTX';
import { BannerCTXProvider } from './banner/CTX';

const JoinedCTXProvider: React.FC<IFC> = ({ children }) => {
  return (
    <GlobalCTXProvider>
      <YjsCTXProvider>
        <DocCTXProvider>
          <BannerCTXProvider>{children}</BannerCTXProvider>
        </DocCTXProvider>
      </YjsCTXProvider>
    </GlobalCTXProvider>
  );
};

export default JoinedCTXProvider;

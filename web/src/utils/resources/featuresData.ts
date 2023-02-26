import { MantineColor } from '@mantine/core';
import React from 'react';

import { getContentType } from '@cufta22/odf-collab-core';
import { ITranslations } from '@ts/content.types';

import AppWriter from '@icons/products/AppWriter';
import AppCalc from '@icons/products/AppCalc';

export interface IFeature {
  title: string;
  description: string;
  color: MantineColor;
  button1: string;
  button2: string;
  icon: React.FC<{ size?: number; color?: string }>;
  accept: string;
  badge: string;
  appType: 'odt' | 'ods';
}

export const getFeaturesData = (content: ITranslations): IFeature[] => [
  {
    title: content.pages.doc.cards[0].title,
    description: content.pages.doc.cards[0].description,
    color: 'blue',
    button1: content.pages.doc.cards[0].button1,
    button2: content.pages.doc.cards[0].button2,
    icon: AppWriter,
    accept: `${getContentType('odt')}`,
    badge: content.pages.doc.cards[0].badge,
    appType: 'odt',
  },
  // {
  //   title: content.pages.doc.cards[1].title,
  //   description: content.pages.doc.cards[1].description,
  //   color: 'green',
  //   button1: content.pages.doc.cards[1].button1,
  //   button2: content.pages.doc.cards[1].button2,
  //   icon: AppCalc,
  //   accept: `${getContentType('ods')}`,
  //   badge: content.pages.doc.cards[1].badge,
  //   appType: 'ods',
  // },
  // {
  //   title: content.pages.doc.cards[2].title,
  //   description: content.pages.doc.cards[2].description,
  //   color: 'orange',
  //   button1: content.pages.doc.cards[2].button1,
  //   button2: content.pages.doc.cards[2].button2,
  //   icon: AppWriter,
  //   accept: 'application/vnd.oasis.opendocument.text',
  //   badge: content.pages.doc.cards[2].badge,
  // },
  // {
  //   title: content.pages.doc.cards[3].title,
  //   description: content.pages.doc.cards[3].description,
  //   color: 'gray',
  //   button1: content.pages.doc.cards[3].button1,
  //   button2: content.pages.doc.cards[3].button2,
  //   icon: AppWriter,
  //   accept: 'application/vnd.oasis.opendocument.text',
  //   badge: content.pages.doc.cards[3].badge,
  // },
  // {
  //   title: content.pages.doc.cards[4].title,
  //   description: content.pages.doc.cards[4].description,
  //   color: 'gray',
  //   button1: content.pages.doc.cards[4].button1,
  //   button2: content.pages.doc.cards[4].button2,
  //   icon: AppWriter,
  //   accept: 'application/vnd.oasis.opendocument.text',
  //   badge: content.pages.doc.cards[4].badge,
  // },
];

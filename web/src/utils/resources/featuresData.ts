import { MantineColor } from '@mantine/core';
import React from 'react';

import {
  DocumentBulletListFilled,
  DocumentPercentFilled,
  DocumentRibbonFilled,
  DocumentTableFilled,
} from '@fluentui/react-icons';

import { getContentType } from '@cufta22/odf-collab-core';
import { ITranslations } from '@ts/global.types';

export interface IFeature {
  title: string;
  description: string;
  color: MantineColor;
  button1: string;
  button2: string;
  icon: React.FC<{ fontSize: number; color?: string }>;
  accept: string;
  badge: string;
}

export const getFeaturesData = (content: ITranslations): IFeature[] => [
  {
    title: content.pages.doc.cards[0].title,
    description: content.pages.doc.cards[0].description,
    color: 'blue',
    button1: content.pages.doc.cards[0].button1,
    button2: content.pages.doc.cards[0].button2,
    icon: DocumentBulletListFilled,
    accept: `${getContentType('odt')}`,
    badge: content.pages.doc.cards[0].badge,
  },
  // {
  //   title: content.pages.doc.cards[1].title,
  //   description: content.pages.doc.cards[1].description,
  //   color: 'green',
  //   button1: content.pages.doc.cards[1].button1,
  //   button2: content.pages.doc.cards[1].button2,
  //   icon: DocumentTableFilled,
  //   accept: 'application/vnd.oasis.opendocument.text',
  //   badge: content.pages.doc.cards[1].badge,
  // },
  // {
  //   title: content.pages.doc.cards[2].title,
  //   description: content.pages.doc.cards[2].description,
  //   color: 'orange',
  //   button1: content.pages.doc.cards[2].button1,
  //   button2: content.pages.doc.cards[2].button2,
  //   icon: DocumentRibbonFilled,
  //   accept: 'application/vnd.oasis.opendocument.text',
  //   badge: content.pages.doc.cards[2].badge,
  // },
  // {
  //   title: content.pages.doc.cards[3].title,
  //   description: content.pages.doc.cards[3].description,
  //   color: 'gray',
  //   button1: content.pages.doc.cards[3].button1,
  //   button2: content.pages.doc.cards[3].button2,
  //   icon: DocumentPercentFilled,
  //   accept: 'application/vnd.oasis.opendocument.text',
  //   badge: content.pages.doc.cards[3].badge,
  // },
];

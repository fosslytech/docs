import { MantineColor } from '@mantine/core';
import React from 'react';

import {
  DocumentBulletListFilled,
  DocumentPercentFilled,
  DocumentRibbonFilled,
  DocumentTableFilled,
} from '@fluentui/react-icons';

import content from 'src/content/doc/doc.json';

export interface IFeature {
  title: {};
  description: {};
  color: MantineColor;
  button1: {};
  button2: {};
  icon: React.FC<{ fontSize: number; color?: string }>;
  accept: string;
  badge: {};
}

export const FEATURES_DATA: IFeature[] = [
  {
    title: content.cards[0].title,
    description: content.cards[0].description,
    color: 'blue',
    button1: content.cards[0].button1,
    button2: content.cards[0].button2,
    icon: DocumentBulletListFilled,
    accept: 'application/vnd.oasis.opendocument.text',
    badge: content.cards[0].badge,
  },
  // {
  //   title: content.cards[1].title,
  //   description: content.cards[1].description,
  //   color: 'green',
  //   button1: content.cards[1].button1,
  //   button2: content.cards[1].button2,
  //   icon: DocumentTableFilled,
  //   accept: 'application/vnd.oasis.opendocument.text',
  //   badge: content.cards[1].badge,
  // },
  // {
  //   title: content.cards[2].title,
  //   description: content.cards[2].description,
  //   color: 'orange',
  //   button1: content.cards[2].button1,
  //   button2: content.cards[2].button2,
  //   icon: DocumentRibbonFilled,
  //   accept: 'application/vnd.oasis.opendocument.text',
  //   badge: content.cards[2].badge,
  // },
  // {
  //   title: content.cards[3].title,
  //   description: content.cards[3].description,
  //   color: 'gray',
  //   button1: content.cards[3].button1,
  //   button2: content.cards[3].button2,
  //   icon: DocumentPercentFilled,
  //   accept: 'application/vnd.oasis.opendocument.text',
  //   badge: content.cards[3].badge,
  // },
];

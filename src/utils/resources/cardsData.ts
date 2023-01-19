import { MantineColor, MantineTheme, MantineThemeColors } from '@mantine/core';
import React from 'react';

import { DocumentBulletListFilled, DocumentTableFilled } from '@fluentui/react-icons';
import content from 'src/content/index/home.json';

interface ICard {
  title: {};
  description: {};
  color: MantineColor;
  button1: {};
  button2: {};
  icon: React.FC<{ fontSize: number; color?: string }>;
  accept: string;
  badge: {};
}

export const CARDS_DATA: ICard[] = [
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
];

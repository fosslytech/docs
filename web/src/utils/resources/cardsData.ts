import React from 'react';
import { ITranslations } from '@ts/content.types';

import { TablerIconsProps, IconBrandOpenSource, IconUsers, IconLeaf } from '@tabler/icons-react';

interface CardsSectionProps {
  title: string;
  description: string;
  icon: React.FC<TablerIconsProps>;
}

export const getCardsData = (content: ITranslations): CardsSectionProps[] => [
  {
    title: content.pages.home.cards.cards[0].title,
    description: content.pages.home.cards.cards[0].description,
    icon: IconLeaf,
  },
  {
    title: content.pages.home.cards.cards[1].title,
    description: content.pages.home.cards.cards[1].description,
    icon: IconBrandOpenSource,
  },
  {
    title: content.pages.home.cards.cards[2].title,
    description: content.pages.home.cards.cards[2].description,
    icon: IconUsers,
  },
];

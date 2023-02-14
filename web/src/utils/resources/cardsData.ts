import { ITranslations } from '@ts/content.types';

import { TablerIcon, IconBrandOpenSource, IconUsers, IconLeaf } from '@tabler/icons';

interface CardsSectionProps {
  title: string;
  description: string;
  icon: TablerIcon;
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

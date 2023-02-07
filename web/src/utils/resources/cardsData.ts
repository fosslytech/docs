import { FluentIconsProps, LeafOneFilled, LockOpenFilled, PeopleFilled } from '@fluentui/react-icons';
import { ITranslations } from '@ts/global.types';

interface CardsSectionProps {
  title: string;
  description: string;
  icon: React.FC<FluentIconsProps>;
}

export const getCardsData = (content: ITranslations): CardsSectionProps[] => [
  {
    title: content.pages.home.cards.cards[0].title,
    description: content.pages.home.cards.cards[0].description,
    icon: LeafOneFilled,
  },
  {
    title: content.pages.home.cards.cards[1].title,
    description: content.pages.home.cards.cards[1].description,
    icon: LockOpenFilled,
  },
  {
    title: content.pages.home.cards.cards[2].title,
    description: content.pages.home.cards.cards[2].description,
    icon: PeopleFilled,
  },
];

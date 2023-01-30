import {
  CodeFilled,
  LeafOneFilled,
  LockOpenFilled,
  LockOpenRegular,
  PeopleFilled,
  PeopleRegular,
  PhoneDesktopFilled,
  PhoneDesktopRegular,
} from '@fluentui/react-icons';
import { CardsSectionProps } from '@module/Index/CardsSection/CardsSection';

import content from '@content/index/home.json';

export const cardsData: CardsSectionProps = {
  data: [
    {
      title: content.cards.cards[0].title,
      description: content.cards.cards[0].description,
      icon: LeafOneFilled,
    },
    {
      title: content.cards.cards[1].title,
      description: content.cards.cards[1].description,
      icon: LockOpenFilled,
    },
    {
      title: content.cards.cards[2].title,
      description: content.cards.cards[2].description,
      icon: PeopleFilled,
    },
  ],
};

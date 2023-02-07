import {
  DocumentBulletListFilled,
  DocumentPercentFilled,
  DocumentTableFilled,
  FlashFilled,
  FluentIconsProps,
} from '@fluentui/react-icons';
import { ITranslations } from '@ts/global.types';

export interface ITimelineData {
  version: string;
  title: string;
  description: string;
  date: string;
  icon: React.FC<FluentIconsProps>;
}

export const CURRENT_TIMELINE_STEP = 1;

export const getTimelineData = (content: ITranslations): ITimelineData[] => [
  {
    version: content.components.timeline[0].version,
    title: content.components.timeline[0].title,
    description: content.components.timeline[0].description,
    date: content.components.timeline[0].date,
    icon: DocumentBulletListFilled,
  },
  {
    version: content.components.timeline[1].version,
    title: content.components.timeline[1].title,
    description: content.components.timeline[1].description,
    date: content.components.timeline[1].date,
    icon: FlashFilled,
  },
  {
    version: content.components.timeline[2].version,
    title: content.components.timeline[2].title,
    description: content.components.timeline[2].description,
    date: content.components.timeline[2].date,
    icon: DocumentTableFilled,
  },
  {
    version: content.components.timeline[3].version,
    title: content.components.timeline[3].title,
    description: content.components.timeline[3].description,
    date: content.components.timeline[3].date,
    icon: DocumentPercentFilled,
  },
];

import {
  DocumentBulletListFilled,
  DocumentPercentFilled,
  DocumentTableFilled,
  FlashFilled,
  FluentIconsProps,
} from '@fluentui/react-icons';

import content from 'src/content/index/timeline.json';

export interface ITimelineData {
  version: {};
  title: {};
  description: {};
  date: {};
  icon: React.FC<FluentIconsProps>;
}

export const CURRENT_TIMELINE_STEP = 1;

export const timelineData: ITimelineData[] = [
  {
    version: content.timeline[0].version,
    title: content.timeline[0].title,
    description: content.timeline[0].description,
    date: content.timeline[0].date,
    icon: DocumentBulletListFilled,
  },
  {
    version: content.timeline[1].version,
    title: content.timeline[1].title,
    description: content.timeline[1].description,
    date: content.timeline[1].date,
    icon: FlashFilled,
  },
  {
    version: content.timeline[2].version,
    title: content.timeline[2].title,
    description: content.timeline[2].description,
    date: content.timeline[2].date,
    icon: DocumentTableFilled,
  },
  {
    version: content.timeline[3].version,
    title: content.timeline[3].title,
    description: content.timeline[3].description,
    date: content.timeline[3].date,
    icon: DocumentPercentFilled,
  },
];

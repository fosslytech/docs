import { useEffect, useRef } from 'react';
import { Badge, Group, ScrollArea, Text, Timeline } from '@mantine/core';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import { getTimelineData } from '@utils/resources/timelineData';

const TimelineSection = () => {
  const { translate, content } = useGlobalCtx();
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewport.current) {
      // viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });
    }
  }, [viewport]);

  const timelineData = getTimelineData(content);

  return (
    <ScrollArea style={{ height: 350 }} offsetScrollbars viewportRef={viewport}>
      <Timeline active={0} bulletSize={46} lineWidth={3}>
        {timelineData.map((t, i) => (
          <Timeline.Item
            key={i}
            bullet={<t.icon fontSize={32} />}
            lineVariant={i + 1 >= timelineData.length - 1 ? 'dashed' : 'solid'}
            title={
              <Group>
                <Badge ml="md" variant="filled" size="lg" color="gray" tt="none" radius="sm">
                  {translate(t.version)}
                </Badge>
                {translate(t.title)}
              </Group>
            }
          >
            <Text color="dimmed" ml="md" my="xs" size="sm">
              {translate(t.description)}
            </Text>

            <Text size="xs" ml="md">
              {translate(t.date)}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </ScrollArea>
  );
};

export default TimelineSection;

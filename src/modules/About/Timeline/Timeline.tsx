import {
  DocumentBulletListFilled,
  DocumentPercentFilled,
  DocumentTableFilled,
  FlashFilled,
} from '@fluentui/react-icons';
import { Paper, ScrollArea, Text, Timeline } from '@mantine/core';
import React, { useEffect, useRef } from 'react';

const TimelineSection = () => {
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewport.current) {
      viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });
    }
  }, [viewport]);

  return (
    <Paper radius="md" p="xl" withBorder h="100%">
      <Text size={28} weight={600} mb={16}>
        Timeline
      </Text>

      <ScrollArea style={{ height: 350 }} offsetScrollbars viewportRef={viewport}>
        <Timeline active={0} bulletSize={36} lineWidth={3}>
          <Timeline.Item bullet={<DocumentBulletListFilled fontSize={24} />} title="LibreOffice Writer">
            <Text color="dimmed" size="sm">
              Initial release with LibreOffice Writer
            </Text>
            <Text size="xs" mt={4}>
              01.02.2023
            </Text>
          </Timeline.Item>

          <Timeline.Item bullet={<FlashFilled fontSize={24} />} title="@supabase">
            <Text color="dimmed" size="sm">
              Add DB & Auth to persist documents
            </Text>
            <Text size="xs" mt={4}>
              15.02.2023
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="LibreOffice Math"
            bullet={<DocumentPercentFilled fontSize={24} />}
            lineVariant="dashed"
          >
            <Text color="dimmed" size="sm" mt={4}>
              Add LibreOffice Math support
            </Text>
            <Text size="xs" mt={4}>
              01.03.2023
            </Text>
          </Timeline.Item>

          <Timeline.Item bullet={<DocumentTableFilled fontSize={24} />} title="LibreOffice Calc">
            <Text color="dimmed" size="sm">
              Add LibreOffice Calc support
            </Text>
            <Text size="xs" mt={4}>
              --.--.----
            </Text>
          </Timeline.Item>
        </Timeline>
      </ScrollArea>
    </Paper>
  );
};

export default TimelineSection;

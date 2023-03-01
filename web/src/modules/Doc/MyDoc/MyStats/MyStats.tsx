import { RingProgress, Text, SimpleGrid, Paper, Center, Group, RingProgressProps } from '@mantine/core';
import { TablerIconsProps, IconDatabase, IconFile, IconLock } from '@tabler/icons-react';
import { IDocument } from '@ts/supabase.types';
import { calculatePercentage } from '@utils/functions/calculatePercentage';
import useGlobalCtx from 'src/store/global/use-global-ctx';

interface StatsRingProps {
  label: string;
  stats: string;
  sections: RingProgressProps['sections'];
  icon: React.FC<TablerIconsProps>;
}

interface Props {
  documents: IDocument[];
  isLoading: boolean;
}

const MyStats: React.FC<Props> = ({ documents, isLoading }) => {
  const { translate, content } = useGlobalCtx();

  const odtCount = documents?.filter((d) => d.ext === 'odt').length;
  const odsCount = documents?.filter((d) => d.ext === 'ods').length;

  const passwordCount = documents?.filter((d) => d.password).length;

  const data: StatsRingProps[] = documents && [
    {
      label: 'Total storage',
      icon: IconDatabase,
      sections: [
        {
          value: documents.length * (100 / 25),
          color:
            calculatePercentage(documents.length * (100 / 25), 100) > 75
              ? 'red'
              : calculatePercentage(documents.length * (100 / 25), 100) > 50
              ? 'yellow'
              : 'green',
          tooltip: `${documents.length} / 25`,
        },
      ],
      stats: `${documents.length} / 25`,
    },
    {
      label: 'Document type',
      icon: IconFile,
      sections: [
        { value: odtCount * (100 / documents.length), color: 'blue', tooltip: `Text - ${odtCount}` },
        { value: odsCount * (100 / documents.length), color: 'green', tooltip: `Spreadsheet - ${odsCount}` },
      ],
      stats: `${odtCount} text`,
    },
    {
      label: 'Password %',
      icon: IconLock,
      sections: [
        {
          value: passwordCount * (100 / documents.length),
          color: 'green',
          tooltip: `Protected - ${passwordCount}`,
        },
        {
          value: (documents.length - passwordCount) * (100 / documents.length),
          color: 'yellow',
          tooltip: `Unprotected - ${documents.length - passwordCount}`,
        },
      ],
      stats: `${passwordCount} / ${documents.length}`,
    },
  ];

  const stats =
    data &&
    data.map((stat) => {
      const Icon = stat.icon;

      return (
        <Paper withBorder radius="md" p="xs" key={stat.label}>
          <Group>
            <RingProgress
              size={80}
              thickness={8}
              sections={stat.sections}
              label={
                <Center>
                  <Icon size={22} />
                </Center>
              }
            />

            <div>
              <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                {stat.label}
              </Text>
              <Text weight={700} size="xl">
                {stat.stats}
              </Text>
            </div>
          </Group>
        </Paper>
      );
    });

  if (isLoading) return <></>;

  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} mt="md">
      {stats}
    </SimpleGrid>
  );
};

export default MyStats;

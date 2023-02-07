import { Accordion, Container, Title } from '@mantine/core';
import { formatChangelog } from './formatChangelog';

import useGlobalCtx from 'src/store/global/use-global-ctx';

interface Props {
  data: string;
}

const Changelog: React.FC<Props> = ({ data }) => {
  const { translate, content } = useGlobalCtx();

  return (
    <Container size="lg" py="xl" mt={40} mb={40}>
      <Title align="center" mt="md" mb="xl">
        {translate(content.pages.changelog.title)}
      </Title>

      <Accordion variant="separated" defaultValue="customization">
        {formatChangelog(data).map((obj, i) => {
          return (
            <Accordion.Item key={i} value={obj.title}>
              <Accordion.Control>{obj.title}</Accordion.Control>
              <Accordion.Panel style={{ whiteSpace: 'pre' }} mt={12}>
                {obj.content.replace(/^\s+/g, '')}
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default Changelog;

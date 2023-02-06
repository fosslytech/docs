import { Container, Title, Button, Group, Text } from '@mantine/core';
import Link from 'next/link';
import GitHub from 'src/icons/logos/GitHub';
import useStyles from './HeroSection.styles';
import TimelineSection from './TimelineSection';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import content from '@content/index/home.json';

const HeroSection = () => {
  const { translate } = useGlobalCtx();
  const { classes } = useStyles();

  return (
    <div>
      <Container size="lg" py="xl">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              {/* A <span className={classes.highlight}>modern</span> FOSS <br /> collaboration tool */}
              {translate(content.hero.title1)}{' '}
              <span className={classes.highlight}>{translate(content.hero.title2)}</span>{' '}
              {translate(content.hero.title3)}
              <br /> {translate(content.hero.title4)}{' '}
            </Title>

            <Text color="dimmed" mt="md">
              {translate(content.hero.description)}
            </Text>

            <Group mt={30}>
              <Link href="/download">
                <Button radius="lg" size="lg" className={classes.control}>
                  {translate(content.hero.downloadBtn)}
                </Button>
              </Link>
              <Link href="https://github.com/cufta22/odf-collab" target="_blank">
                <Button
                  variant="default"
                  radius="lg"
                  size="lg"
                  className={classes.control}
                  leftIcon={<GitHub width={20} />}
                >
                  {translate(content.hero.sourceCode)}
                </Button>
              </Link>
            </Group>
          </div>

          <div className={classes.image}>
            <TimelineSection />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;

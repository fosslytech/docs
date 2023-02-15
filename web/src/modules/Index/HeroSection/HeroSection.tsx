import { Container, Title, Button, Group, Text } from '@mantine/core';
import Link from 'next/link';
import useStyles from './HeroSection.styles';

import useGlobalCtx from 'src/store/global/use-global-ctx';
import CatVector from '@icons/CatVector';

import { IconBrandGithub } from '@tabler/icons';

const HeroSection = () => {
  const { translate, content } = useGlobalCtx();
  const { classes } = useStyles();

  return (
    <div>
      <Container size="lg" py="xl">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              {/* A <span className={classes.highlight}>modern</span> FOSS <br /> collaboration tool */}
              {translate(content.pages.home.hero.title1)}{' '}
              <span className={classes.highlight}>{translate(content.pages.home.hero.title2)}</span>{' '}
              {translate(content.pages.home.hero.title3)}
              <br /> {translate(content.pages.home.hero.title4)}{' '}
            </Title>

            <Text color="dimmed" mt="md">
              {translate(content.pages.home.hero.description)}
            </Text>

            <Group mt={30}>
              <Link href="/download">
                <Button radius="lg" size="lg" className={classes.control}>
                  {translate(content.pages.home.hero.downloadBtn)}
                </Button>
              </Link>
              <Link href="https://github.com/cufta22/odf-collab" target="_blank">
                <Button
                  variant="default"
                  radius="lg"
                  size="lg"
                  className={classes.control}
                  leftIcon={<IconBrandGithub size={24} />}
                >
                  {translate(content.pages.home.hero.sourceCode)}
                </Button>
              </Link>
            </Group>
          </div>

          <div className={classes.image}>
            <CatVector size={300} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;

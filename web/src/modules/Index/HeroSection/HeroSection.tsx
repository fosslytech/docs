import { Container, Title, Button, Group, Text } from '@mantine/core';
import Link from 'next/link';
import useStyles from './HeroSection.styles';

import useGlobalCtx from 'src/store/global/use-global-ctx';
import CatVector from '@icons/CatVector';

import { IconBrandGithub } from '@tabler/icons-react';
import { useResponsive } from '@hooks/use-responsive';

const HeroSection = () => {
  const { translate, content } = useGlobalCtx();
  const { classes } = useStyles();

  const isXs = useResponsive('max', 'xs');

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
              <Link href="/doc">
                <Button radius="lg" size={isXs ? 'md' : 'lg'}>
                  {translate(content.pages.home.hero.useOnlineBtn)}
                </Button>
              </Link>
              <Link href="https://github.com/fosslytech/docs" target="_blank">
                <Button
                  variant="default"
                  radius="lg"
                  size={isXs ? 'md' : 'lg'}
                  leftIcon={<IconBrandGithub size={isXs ? 20 : 24} />}
                >
                  {translate(content.pages.home.hero.sourceCodeBtn)}
                </Button>
              </Link>
            </Group>
          </div>

          <div className={classes.image}>
            <CatVector size={250} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;

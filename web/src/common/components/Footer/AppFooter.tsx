import Logo from '@icons/Logo';
import Fossly from '@icons/logos/Fossly';
import { Text, Container, Group, Flex } from '@mantine/core';
import Link from 'next/link';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import useStyles from './AppFooter.styles';

export interface AppFooterData {
  title: string;
  links: { label: string; link: string }[];
}

export interface AppFooterProps {
  data: AppFooterData[];
}

const AppFooter: React.FC<AppFooterProps> = ({ data }) => {
  const { classes, theme } = useStyles();
  const { translate } = useGlobalCtx();

  const groups = data.map((group, i) => {
    const links = group.links.map((link, index) => {
      if (link.link.includes('http')) {
        return (
          <Text<'a'>
            key={index}
            className={classes.link}
            component="a"
            href={link.link}
            target="_blank"
            // onClick={(event) => event.preventDefault()}
          >
            {translate(link.label)}
          </Text>
        );
      }

      return (
        <Link key={index} className={classes.link} href={link.link}>
          {translate(link.label)}
        </Link>
      );
    });

    return (
      <div className={classes.wrapper} key={i}>
        <Text className={classes.title}>{translate(group.title)}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        <div className={classes.logo}>
          <Flex align="center" mb="md">
            <Fossly
              width={26}
              fill2={theme.colors[theme.primaryColor][2]}
              fill4={theme.colors[theme.primaryColor][4]}
            />

            <Text ml={12} fw={600} size={16}>
              Fossly Tech
            </Text>
          </Flex>

          <Text size="xs" color="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>

      <Container size="lg" className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          Made with ❤️ by FOSS community
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          {/* <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon> */}
          Socials
        </Group>
      </Container>
    </footer>
  );
};

export default AppFooter;

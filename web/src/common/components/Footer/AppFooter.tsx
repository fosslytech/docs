import { Text, Container, Group } from '@mantine/core';
import Link from 'next/link';
import useStyles from './AppFooter.styles';

export interface AppFooterProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

const AppFooter: React.FC<AppFooterProps> = ({ data }) => {
  const { classes } = useStyles();

  const groups = data.map((group) => {
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
            {link.label}
          </Text>
        );
      }

      return (
        <Link key={index} className={classes.link} href={link.link}>
          {link.label}
        </Link>
      );
    });

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        <div className={classes.logo}>
          Logo
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

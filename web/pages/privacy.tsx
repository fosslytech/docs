import AppLayout from '@layout/AppLayout';
import { Container, Divider, Flex, List, Paper, Text, Title } from '@mantine/core';
import { NextPageWithLayout } from '@ts/global.types';

const Page: NextPageWithLayout = () => {
  return (
    <Container size="md" py="xl" mt={60} mb={60}>
      <Paper p="lg">
        <Title size={46} align="center" my="xl">
          Privacy Policy
        </Title>

        <Divider my="xl" />

        {/* Types of data we collect */}

        <Flex align="center">
          <Title order={2} ml="md" mb="md">
            Types of data we collect
          </Title>
        </Flex>

        <List withPadding my="md" size="lg">
          <List.Item>Email</List.Item>
        </List>

        <Divider my="xl" />

        {/* How we use your data */}

        <Flex align="center">
          <Title order={2} ml="md" mb="md">
            How we use your data
          </Title>
        </Flex>

        <List withPadding my="md" size="lg">
          <List.Item>We don&apos;t 🙂</List.Item>
        </List>

        <Divider my="xl" />

        {/* Third parties who process your data */}

        <Flex align="center">
          <Title order={2} ml="md" mb="md">
            Third parties who process your data
          </Title>
        </Flex>

        <List withPadding my="md" size="lg">
          <List.Item>Infrastructure: Supabase, AWS</List.Item>
        </List>

        <Divider my="xl" />

        {/* We use cookies */}

        <Flex align="center">
          <Title order={2} ml="md" mb="md">
            We *kinda* use cookies
          </Title>
        </Flex>

        <Text ml="xl">By default we use no cookies on our website</Text>

        <List withPadding my="md" size="lg">
          <List.Item>If you&apos;re signed in session id is saved in a cookie</List.Item>
        </List>

        <Divider my="xl" />

        {/* When and how we collect data */}

        <Flex align="center">
          <Title order={2} ml="md" mb="md">
            When and how we collect data
          </Title>
        </Flex>

        <Text ml="xl">
          Keep in mind that no data is collected by default. <br />
          We only store the your data when you decide to sign in
        </Text>

        <Divider my="xl" />

        {/* Know your rights */}

        <Flex align="center">
          <Title order={2} ml="md" mb="md">
            Know your rights
          </Title>
        </Flex>

        <List withPadding my="md" size="lg">
          <List.Item>Access all information we hold on you</List.Item>
          <List.Item>Delete any of your data we have</List.Item>
          <List.Item>Contact us about anything you need</List.Item>
        </List>

        <Divider my="xl" />

        <Text align="center" ml="xl" my="xl">
          Contact us - <a href="mailto:contact@odfcollab.com">contact@fossey.tech</a>
        </Text>
      </Paper>
    </Container>
  );
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;

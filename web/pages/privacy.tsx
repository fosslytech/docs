import {
  AccessibilityFilled,
  BuildingFactoryFilled,
  CookiesFilled,
  HandshakeFilled,
  InfoFilled,
  PeopleCommunityFilled,
} from '@fluentui/react-icons';
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

        <Divider my="md" />

        {/* Types of data we collect */}

        <Flex align="center">
          <InfoFilled fontSize={36} />

          <Title order={2} ml="md" my="md">
            Types of data we collect
          </Title>
        </Flex>

        <List withPadding my="md" size="lg">
          <List.Item>Email</List.Item>
          <List.Item>Document content</List.Item>
        </List>

        <Divider my="md" />

        {/* How we use your data */}

        <Flex align="center">
          <BuildingFactoryFilled fontSize={36} />

          <Title order={2} ml="md" my="md">
            How we use your data
          </Title>
        </Flex>

        <List withPadding my="md" size="lg">
          <List.Item>We don&apos;t 🙂</List.Item>
        </List>

        <Divider my="md" />

        {/* Third parties who process your data */}

        <Flex align="center">
          <PeopleCommunityFilled fontSize={36} />

          <Title order={2} ml="md" my="md">
            Third parties who process your data
          </Title>
        </Flex>

        <List withPadding my="md" size="lg">
          <List.Item>Infrastructure: Supabase, AWS</List.Item>
        </List>

        <Divider my="md" />

        {/* We use cookies */}

        <Flex align="center">
          <CookiesFilled fontSize={36} />

          <Title order={2} ml="md" my="md">
            We *kinda* use cookies
          </Title>
        </Flex>

        <Text ml="xl">By default we use no cookies on our website</Text>

        <List withPadding my="md" size="lg">
          <List.Item>If you&apos;re signed in session id is saved in a cookie</List.Item>
        </List>

        <Divider my="md" />

        {/* When and how we collect data */}

        <Flex align="center">
          <HandshakeFilled fontSize={36} />

          <Title order={2} ml="md" my="md">
            When and how we collect data
          </Title>
        </Flex>

        <Text ml="xl">
          Keep in mind that no data is collected by default. <br />
          We only store the your data when you decide to sign in or save your document with us
        </Text>

        <List withPadding my="md" size="lg">
          <List.Item>Email - you sign in</List.Item>
          <List.Item>Document content - you save it to the database</List.Item>
        </List>

        <Divider my="md" />

        {/* Know your rights */}

        <Flex align="center">
          <AccessibilityFilled fontSize={36} />

          <Title order={2} ml="md" my="md">
            Know your rights
          </Title>
        </Flex>

        <List withPadding my="md" size="lg">
          <List.Item>Access all information we hold on you</List.Item>
          <List.Item>Delete any of your data we have</List.Item>
          <List.Item>Contact us about anything you need</List.Item>
        </List>

        <Divider my="md" />

        <Text align="center" ml="xl">
          Contact us @
        </Text>
      </Paper>
    </Container>
  );
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;

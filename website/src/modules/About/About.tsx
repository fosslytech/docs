import { Container, Grid, Group } from '@mantine/core';
import React from 'react';

import TimelineSection from './Timeline/Timeline';
import SettingsSection from './Settings/Settings';
import InfoSection from './Info/Info';

const About = () => {
  return (
    <Container size="lg" py="xl" mt={40} mb={40}>
      <Grid columns={2} align="stretch">
        <Grid.Col span={2}>
          <SettingsSection />
        </Grid.Col>

        <Grid.Col span={1}>
          <InfoSection />
        </Grid.Col>

        <Grid.Col span={1}>
          <TimelineSection />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default About;

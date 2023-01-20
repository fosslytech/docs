import { AddFilled, ArrowUploadFilled } from '@fluentui/react-icons';
import { Badge, Button, Card, Divider, FileButton, Flex, Text } from '@mantine/core';
import { IFeature } from '@utils/resources/featuresData';
import React from 'react';
import useDocCtx from 'src/store/doc/use-doc-ctx';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import useStyles from './Feature.styles';

const Feature: React.FC<IFeature> = (feature) => {
  const { translate } = useGlobalCtx();
  const { uploadDoc, createNewDoc, isUploading } = useDocCtx();
  const { classes, theme } = useStyles();

  return (
    <Card shadow="md" radius="md" className={classes.card} p="xl">
      <Flex align="center">
        <feature.icon fontSize={40} color={theme.colors[feature.color][6]} />

        <Text size="xl" weight={600} ml={6} c={theme.colors.gray[2]}>
          {translate(feature.title)}
        </Text>

        <div style={{ flex: 1 }}></div>

        <Badge color={feature.color} size="lg" variant="dot">
          {translate(feature.badge)}
        </Badge>
      </Flex>

      <Divider size={2} color={theme.colors[feature.color][6]} w={40} my={10} />

      <Text size="sm" color="dimmed" mt="sm">
        {translate(feature.description)}
      </Text>

      <Flex justify="end" mt="lg">
        <FileButton onChange={uploadDoc} accept={feature.accept}>
          {(props) => (
            <Button
              variant="default"
              leftIcon={<ArrowUploadFilled fontSize={16} />}
              onClick={() => {}}
              loading={isUploading}
              {...props}
            >
              {translate(feature.button1)}
            </Button>
          )}
        </FileButton>

        <Button
          variant="filled"
          ml={10}
          leftIcon={<AddFilled fontSize={16} />}
          onClick={() => createNewDoc()}
          color={feature.color}
        >
          {translate(feature.button2)}
        </Button>
      </Flex>
    </Card>
  );
};

export default Feature;

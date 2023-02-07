import usePwa from '@hooks/use-pwa';
import PWA from '@icons/PWA';
import { Text, Card, Divider, Button, Flex, Badge } from '@mantine/core';
import { useCallback } from 'react';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import useStyles from './Sections.styles';

const SectPWA = () => {
  const { translate, content } = useGlobalCtx();

  const { classes, theme } = useStyles();

  const { installPrompt, isInstalled, isStandalone, isOffline, canInstall } = usePwa();

  const handleInstallPrompt = useCallback(() => {
    if (canInstall) {
      installPrompt();
    }
  }, [canInstall, installPrompt]);

  return (
    <Card shadow="md" radius="md" className={classes.card} p="xl">
      <PWA
        height={20}
        fillInner={theme.colors[theme.primaryColor][6]}
        fillOuter={theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[4]}
      />

      <Divider size={2} color={theme.colors[theme.primaryColor][6]} w={70} my={20} />

      <Text size="sm" color="dimmed" mt="sm">
        {translate(content.pages.download.optionPWA.description)}
      </Text>

      <Flex justify="end" align="center" mt="lg">
        <Button
          onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps')}
          variant="outline"
          mr="md"
        >
          {translate(content.pages.download.optionPWA.buttonLM)}
        </Button>

        <Button onClick={handleInstallPrompt} disabled={isOffline || isInstalled || isStandalone}>
          {isOffline
            ? translate(content.pages.download.optionPWA.buttonOffline)
            : isInstalled
            ? translate(content.pages.download.optionPWA.buttonInstalled)
            : isStandalone
            ? translate(content.pages.download.optionPWA.buttonUnavailable)
            : translate(content.pages.download.optionPWA.buttonInstall)}
        </Button>
      </Flex>
    </Card>
  );
};

export default SectPWA;

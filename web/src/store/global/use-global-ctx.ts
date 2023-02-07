import { GlobalContext } from './CTX';
import { useContext } from 'react';
import { IAppFont, IAppTheme } from '@ts/global.types';
import { ColorScheme, DefaultMantineColor } from '@mantine/core';

const useGlobalCtx = () => {
  const { dispatch, content, appTheme, appFont, appColorScheme, appPrimaryColor } = useContext(GlobalContext);

  const translate = (content: string) => content || '<-- untranslated -->';

  const toggleColorScheme = (scheme: ColorScheme) => dispatch({ type: 'SET_COLOR_SCHEME', payload: scheme });

  const changePrimaryColor = (c: DefaultMantineColor) => dispatch({ type: 'SET_PRIMARY_COLOR', payload: c });
  const changeTheme = (theme: IAppTheme) => dispatch({ type: 'SET_THEME', payload: theme });
  const changeFont = (font: IAppFont) => dispatch({ type: 'SET_FONT', payload: font });

  return {
    content,
    translate,
    appTheme,
    changeTheme,
    appFont,
    changeFont,
    appColorScheme,
    toggleColorScheme,
    appPrimaryColor,
    changePrimaryColor,
  };
};

export default useGlobalCtx;

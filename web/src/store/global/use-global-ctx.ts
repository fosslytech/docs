import { GlobalContext } from './CTX';
import { useContext } from 'react';
import { IAppFont, IAppTheme, ILang } from '@ts/global.types';
import { ColorScheme, DefaultMantineColor } from '@mantine/core';

const useGlobalCtx = () => {
  const { dispatch, language, appTheme, appFont, appColorScheme, appPrimaryColor } =
    useContext(GlobalContext);

  const changeLanguage = (lang: ILang) => dispatch({ type: 'SET_LANGUAGE', payload: lang });
  const translate = (obj: any) => obj[language] || '<-- untranslated -->';

  const toggleColorScheme = (scheme: ColorScheme) => dispatch({ type: 'SET_COLOR_SCHEME', payload: scheme });

  const changePrimaryColor = (c: DefaultMantineColor) => dispatch({ type: 'SET_PRIMARY_COLOR', payload: c });
  const changeTheme = (theme: IAppTheme) => dispatch({ type: 'SET_THEME', payload: theme });
  const changeFont = (font: IAppFont) => dispatch({ type: 'SET_FONT', payload: font });

  return {
    language,
    changeLanguage,
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

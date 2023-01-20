import { GlobalContext } from './CTX';
import { useContext } from 'react';
import { IAppFont, IAppTheme, ILang, IUser } from '@ts/global.types';
import { ColorScheme } from '@mantine/core';

const useGlobalCtx = () => {
  const { dispatch, user, language, appTheme, appFont, appColorScheme } = useContext(GlobalContext);

  const logIn = (user: IUser) => dispatch({ type: 'SET_USER', payload: user });
  const logOut = () => dispatch({ type: 'SET_USER', payload: null });

  const changeLanguage = (lang: ILang) => dispatch({ type: 'SET_LANGUAGE', payload: lang });
  const translate = (obj: any) => obj[language] || '<-- untranslated -->';

  const changeTheme = (theme: IAppTheme) => dispatch({ type: 'SET_THEME', payload: theme });

  const changeFont = (font: IAppFont) => dispatch({ type: 'SET_FONT', payload: font });

  const toggleColorScheme = (scheme: ColorScheme) => dispatch({ type: 'SET_COLOR_SCHEME', payload: scheme });

  return {
    user,
    logIn,
    logOut,
    language,
    changeLanguage,
    translate,
    appTheme,
    changeTheme,
    appFont,
    changeFont,
    appColorScheme,
    toggleColorScheme,
  };
};

export default useGlobalCtx;

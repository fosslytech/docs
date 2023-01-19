import { GlobalContext } from './CTX';
import { useContext } from 'react';
import { IAppTheme, ILang, IUser } from '@ts/global.types';

const useGlobalState = () => {
  const { dispatch, user, language, appTheme } = useContext(GlobalContext);

  const logIn = (user: IUser) => dispatch({ type: 'SET_USER', payload: user });
  const logOut = () => dispatch({ type: 'SET_USER', payload: null });

  const changeLanguage = (lang: ILang) => dispatch({ type: 'SET_LANGUAGE', payload: lang });
  const translate = (obj: any) => obj[language] || '<-- untranslated -->';

  const changeTheme = (theme: IAppTheme) => dispatch({ type: 'SET_THEME', payload: theme });

  return {
    user,
    logIn,
    logOut,
    language,
    changeLanguage,
    translate,
    appTheme,
    changeTheme,
  };
};

export default useGlobalState;

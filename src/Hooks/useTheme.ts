import React from 'react';
import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';
import {useDispath, useSelector} from '@/Hooks';
import {Colors, Metrics} from '@/Style';

export default function () {
  const theme = useSelector(s => s.store.theme);
  const dispath = useDispath();

  const isDarkMode = theme == 'dark';
  const isLightMode = !isDarkMode;
  const navigationTheme = isDarkMode ? DarkTheme : DefaultTheme;

  const baseTheme = {
    Metrics: Metrics(),
    Colors: Colors(navigationTheme),
  };

  const setDarkTheme = React.useCallback(() => {
    dispath({type: 'theme', payload: 'dark'});
  }, [dispath]);

  const setLightTheme = React.useCallback(() => {
    dispath({type: 'theme', payload: 'light'});
  }, [dispath]);

  return {
    isDarkMode,
    isLightMode,
    navigationTheme,
    ...baseTheme,
    setDarkTheme,
    setLightTheme,
  };
}

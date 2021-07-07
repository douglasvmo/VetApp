import React from 'react';
import {useContextSelector} from 'use-context-selector';
import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';
import {Context} from '@/Context';
import {Layout, Fonts, defaultVariables} from '@/Style';

export default function () {
  const theme = useContextSelector(Context, s => s.store?.theme);
  const dispath = useContextSelector(Context, s => s.dispath);

  const isDarkMode = theme == 'dark';
  const isLightMode = !isDarkMode;
  const NavigationTheme = isDarkMode ? DarkTheme : DefaultTheme;
  const baseTheme = {
    Layout: Layout(),
    Fonts: Fonts(defaultVariables),
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
    NavigationTheme,
    ...baseTheme,
    setDarkTheme,
    setLightTheme,
  };
}

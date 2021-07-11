import React from 'react';
import {useContextSelector} from 'use-context-selector';
import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';
import {Context} from '@/Context';
import {Fonts, Metrics, defaultVariables} from '@/Style';
import {Variables} from '@/Style/Variables';

const createVariables = (theme: Object): Variables => ({
  ...defaultVariables,
  ...theme,
});

export default function () {
  const theme = useContextSelector(Context, s => s.store?.theme);
  const dispath = useContextSelector(Context, s => s.dispath);

  const isDarkMode = theme == 'dark';
  const isLightMode = !isDarkMode;
  const navigationTheme = isDarkMode ? DarkTheme : DefaultTheme;
  const configVar = createVariables(navigationTheme);

  const baseTheme = {
    Metrics: Metrics(),
    Fonts: Fonts(configVar),
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

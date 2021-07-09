import React from 'react';
import {useContextSelector} from 'use-context-selector';
import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';
import {Context} from '@/Context';
import {Layout, Fonts, defaultVariables} from '@/Style';

export default function () {
  const token = useContextSelector(Context, state => state.store.token);
  const dispath = useContextSelector(Context, state => state.dispath);
  const haveAuth = token && true || false;

  const setToken = React.useCallback(
    (token: string | null) => {
      dispath({type: 'auth', payload: token});
    },
    [dispath],
  );

  return {haveAuth, token, setToken};
}

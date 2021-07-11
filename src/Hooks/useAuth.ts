import React from 'react';
import {useContextSelector} from 'use-context-selector';
import {Context} from '@/Context';


export default function () {
  const token = useContextSelector(Context, state => state.store.token);
  const dispath = useContextSelector(Context, state => state.dispath);
  const haveAuth = (token && true) || false;

  const setToken = React.useCallback(
    (token: string | null) => {
      dispath({type: 'auth', payload: token});
    },
    [dispath],
  );

  return {haveAuth, token, setToken};
}

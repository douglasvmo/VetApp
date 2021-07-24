import React from 'react';
import {useDispath, useSelector} from '@/Hooks';

export default function () {
  const token = useSelector(s => s.store.token);
  const dispath = useDispath();
  const haveAuth = (token && true) || false;

  const setToken = React.useCallback(
    (token: string | null) => {
      dispath({type: 'auth', payload: token});
    },
    [dispath],
  );

  return {haveAuth, token, setToken};
}

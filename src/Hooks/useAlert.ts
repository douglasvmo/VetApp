import React from 'react';
import useDispath from './useDispath';
import useSelector from './useSelector';

export default function () {
  const alert = useSelector(({store}) => store.alert);
  const dispath = useDispath();

  const showAlert = (message: string) => {
    dispath({type: 'alert', payload: {show: true, message}});
  };

  const hideAlert = () => {
    dispath({type: 'alert', payload: {show: false}});
  };

  return {
    alert,
    showAlert: React.useCallback(showAlert, [alert]),
    hideAlert: React.useCallback(hideAlert, []),
  };
}

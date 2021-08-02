import React from 'react';
import useAlert from '@/Hooks/useAlert';
import * as S from './style';
import Button from '../Button';

export default function () {
  const {alert, hideAlert} = useAlert();
  if (!alert.show) return null;

  function onPressHideAlert() {
    hideAlert();
  }

  return (
    <S.AlertContainer>
    
      <S.Title>{alert.message}</S.Title>
      <Button onPress={onPressHideAlert}>hide Alert</Button>

    </S.AlertContainer>
  );
}

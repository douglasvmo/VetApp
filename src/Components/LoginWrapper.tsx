import React from 'react';
import {StyleProp, View, ViewComponent, ViewStyle} from 'react-native';
import {useTheme} from '@/Hooks';

type Type = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function (props: Type) {
  const {Layout} = useTheme();
  return (
    <View
      style={[
        {
          width: '100%',
          height: '100%',
          borderTopLeftRadius: 140,
          justifyContent: 'center',
          backgroundColor: '#fff',
          paddingHorizontal: 10,
        },
        props?.style,
      ]}>
      {props.children}
    </View>
  );
}

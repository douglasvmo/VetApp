import React from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useTheme} from '@/Hooks';

type Props = {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

export default function ({children, onPress, style}: Props) {
  const {Fonts} = useTheme();
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      <Text style={[Fonts.textSmall]}>{children}</Text>
    </TouchableOpacity>
  );
}

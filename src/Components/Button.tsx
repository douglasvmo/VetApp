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
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

export default function ({title, onPress, style}: Props) {
  const {Layout, Fonts} = useTheme();
  return (
    <TouchableOpacity style={[Layout.colCenter, style]} onPress={onPress}>
      <Text style={[Fonts.textSmall]}>{title}</Text>
    </TouchableOpacity>
  );
}

import {Theme} from '@react-navigation/native';

export default function ({colors, dark}: Theme) {
  const ligthColors = {
    white: '#ffffff',
  };
  const darkColors = {
    white: '#ffffff',
  };

  return {
    ...(dark ? darkColors : ligthColors),
    ...colors,
  };
}

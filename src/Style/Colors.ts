import {Theme} from '@react-navigation/native';

export default function ({colors, dark}: Theme) {
  const ligthColors = {
    white: '#ffffff',
    primary: '#0E4DA4',
  };
  const darkColors = {
    white: '#ffffff',
    primary: '#0E4DA4',
  };

  return {
    ...colors,
    ...(dark ? darkColors : ligthColors),
  };
}

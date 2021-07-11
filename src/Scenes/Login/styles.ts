import {useTheme} from '@/Hooks';
import {StyleSheet} from 'react-native';

export const useStyle = () => {
  const {Metrics, Fonts} = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: '#fff',
    },
    loginWrapper: {
      height: Metrics.getHeightFromDP('80%'),
      borderTopLeftRadius: 100,
      justifyContent: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: 10,
    },
    logoWrapper: {
      height: '35%',
      marginBottom: -100,
      justifyContent: 'center',
      backgroundColor: '#0E4DA4',
      zIndex: -2,
    },
    button: {
      backgroundColor: '#0E4DA4',
      height: Metrics.getHeightFromDP('5%'),
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    buttonText: {
      fontSize: Metrics.extraLargeSize,
    },
  });
};

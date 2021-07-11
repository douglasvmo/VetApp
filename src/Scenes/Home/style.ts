import {useTheme} from '@/Hooks';
import {StyleSheet} from 'react-native';

export const useStyle = () => {
  const {Metrics} = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: '#fff',
    },

    headerWrapper: {
      height: '35%',
      marginBottom: -100,
      justifyContent: 'center',
      backgroundColor: '#0E4DA4',
      zIndex: -2,
    },
    homeWrapper: {
      height: Metrics.getHeightFromDP('70%'),
      borderTopLeftRadius: 100,
      justifyContent: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: 10,
    },
  });
};

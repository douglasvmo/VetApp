/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {Navigator} from '@/Navigators';
import {ContextProvider} from '@/Context';
import {ThemeProvider} from 'styled-components';
import {useTheme} from './Hooks';

const App = () => {
  const {Metrics, Colors} = useTheme();
  return (
    <ContextProvider>
      <ThemeProvider theme={{Metrics, Colors}}>
        <Navigator />
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;

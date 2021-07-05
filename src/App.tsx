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

const App = () => {
  return (
    <ContextProvider>
      <Navigator />
    </ContextProvider>
  );
};

export default App;

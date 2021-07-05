import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '@/Scenes';

export default function () {
  const Unauth = createStackNavigator();
  
  return (
    <Unauth.Navigator headerMode="none">
      <Unauth.Screen name="Login" component={Login} />
    </Unauth.Navigator>
  );
}

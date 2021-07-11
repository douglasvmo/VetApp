import React from 'react';
import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Home} from '@/Scenes';

const Stack = createStackNavigator();

function StackHome() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function StackSetings() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setings" component={Home} />
    </Stack.Navigator>
  );
}

export default function () {
  const BottomTab = createBottomTabNavigator();
  const tabBarOptions: BottomTabBarOptions = {
    style: {height: 50},
  };

  return (
    <BottomTab.Navigator tabBarOptions={tabBarOptions}>
      <BottomTab.Screen
        name="Home"
        component={StackHome}
        options={{tabBarIcon: props => <AntDesign name="home" {...props} />}}
      />
      <BottomTab.Screen
        name="Setings"
        component={StackSetings}
        options={{tabBarIcon: props => <AntDesign name="setting" {...props} />}}
      />
    </BottomTab.Navigator>
  );
}

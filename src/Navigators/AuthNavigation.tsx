import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Home} from '@/Scenes';

function StackHome() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function StackSetings() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setings" component={Home} />
    </Stack.Navigator>
  );
}

export default function () {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator>
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

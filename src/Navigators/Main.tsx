import React from "react";
import { StatusBar, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from '@/Hooks'

import { Home } from '@/Scenes';


export default function () {
    const Stack = createStackNavigator();
    const { isDarkMode } = useTheme()

    return (
        <SafeAreaView>
            <NavigationContainer>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <Stack.Navigator >
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>)

}
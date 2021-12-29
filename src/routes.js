import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Notification from './pages/Notification';

import { Entypo, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopColor: 'transparent',
                    paddingBottom: 5,
                    paddingTop: 5,
                },

                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'rgba(255, 99, 71, 0.5)',

            }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />



            <Tab.Screen
                name="Notificaçoes"
                component={Notification}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="notification" size={size} color={color} />
                    )
                }}
            />



        </Tab.Navigator>
    )
}
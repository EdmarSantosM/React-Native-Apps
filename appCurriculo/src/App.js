
import React from 'react';
import {View, Text} from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Resumo from './pages/Resumo';
import Sobre from './pages/Sobre';

const Stack = createStackNavigator();

export default function App(){
    return (
        <NavigationContainer>
           <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Resumo" component={Resumo} />
                <Stack.Screen name="Sobre" component={Sobre} />
           </Stack.Navigator>
        </NavigationContainer>
    );
}



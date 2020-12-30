
import React from 'react';
import {View, Text} from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Resumo from './pages/Resumo';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

const Stack = createStackNavigator();

export default function App(){
    return (
        <NavigationContainer>
           <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}
                    options={{
                        title: 'Bem-vindo',
                        headerStyle:{
                            backgroundColor: '#121212'
                        },
                        headerTintColor: '#FFF'
                    }} />
                <Stack.Screen name="Resumo" component={Resumo} />
                <Stack.Screen name="Sobre" component={Sobre} />
                <Stack.Screen name="Contato" component={Contato} />
           </Stack.Navigator>
        </NavigationContainer>
    );
}



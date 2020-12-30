
import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Resumo from './pages/Resumo';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';


import dima from './assets/dima.jpg';

const Stack = createStackNavigator();

export default function App(){
    return (
        <>
                    <View>
                        <Image source={dima} />
                    </View>
           
                <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home}
                            options={{
                                title: 'Bem-vindo ao  meu AppCurriculo',
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

        </>
    );
}




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
                    <View style={style.page}>
                        <View style={style.container_cabecalho}>
                            <Image source={dima} style={style.foto} />
                        </View> 
                    </View>
           
                <NavigationContainer style={style.page}>
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

const style = StyleSheet.create({
    page: {
        backgroundColor: '#E7E7E7',
        flex: 1
    },
    container_cabecalho: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    foto: {
        width: 150,
        height: 150,
        borderRadius: 125

    }
})



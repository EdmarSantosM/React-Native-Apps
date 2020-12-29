import React from 'react';
import {StyleSheet, View, Image, Text } from 'react-native';

import dima from './assets/dima.jpg';

const App = () => {
    return (
        <>
          <View style={style.page}>
                <View style={style.container_cabecalho}>
                    <Image source={dima} style={style.dima} />
                    <Text>Edmar Santos</Text>
                    <Text>Desenvolvedor Júnior</Text>
                </View>
          </View>
        </>
    );
};

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
    dima: {
        width: 150,
        height: 150,
        borderRadius:150
    }


})

export default App;
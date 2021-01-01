import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Sobre(){
    return (
        <View style={style.container_cabecalho}>
            <Text style={style.texto}> Atuante na área de TI, desde 2007.</Text>
            <Text style={style.texto}> Hobbie principal : Músico.</Text>
            <Text style={style.texto}> Lazer principal:  Praia, animais e Natureza.</Text>
        </View>
    );
}



const style = StyleSheet.create({

    container_cabecalho: {
      
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,


    },
    texto: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
        
       
    }
})
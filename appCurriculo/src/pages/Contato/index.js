import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Contato(){
    return (
        <View style={style.container_cabecalho}>
             <Text style={style.texto}> Email:xpto@ig.com.br</Text>
             <Text style={style.texto}> Telefone: +55 11 9999-9999</Text>
             <TouchableOpacity>
                 <Text>GitHub</Text>
                 <Text>Linkedin</Text>
             </TouchableOpacity>
        </View>
    );
}


const style = StyleSheet.create({

    container_cabecalho: {
      
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25

    },
    texto: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
       
    }
})
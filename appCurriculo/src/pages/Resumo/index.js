import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { color } from 'react-native-reanimated';

export default function Resumo(){
    return (
        <>
            <View style={style.container_cabecalho}>
                <Text style={style.texto}>Em transição de carreira e função, busco oportunidade  na área de Desenvolvimento de Sistemas.</Text>
                <Text></Text>
                <Text style={style.texto}>Atualmente  estudando  as  linguagens ( C#, Java, HTML5, CSS3, JS, React-Native e SQL).</Text>  
            </View>
         </>
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


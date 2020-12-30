import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({navigation}){
    return (
        <View>
            <Text>  AppCurrículo </Text>
            <Button  title="Resumo" onPress={ () => navigation.navigate('Resumo')}/>
            <Text></Text>
            <Button  title="Sobre" onPress={ () => navigation.navigate('Sobre')}/>
            <Text></Text>
            <Button  title="Contato" onPress={ () => navigation.navigate('Contato')}/>
        </View>
    );
}
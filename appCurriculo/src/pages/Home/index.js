import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home(){
    return (
        <View>
            <Text> Home </Text>
            <Button title="Resumo" onPress={ () => navigation.navigate('Resumo')} />
            <Button title="Sobre" onPress={ () => navigation.navigate('Sobre')} />
        </View>
    );
}
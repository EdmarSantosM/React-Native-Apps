

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import dima from './assets/dima.jpg';

import Sobre from './src/pages/Sobre';


const Stack = createStackNavigator();

const App = () => {
    return (
        <>
          <NavigationContainer>
                     <Stack.Navigator>
                        <Stack.Screen name="Sobre" component={Sobre} />
                    </Stack.Navigator>
                </NavigationContainer>
          <View style={style.page}>

              {/*
                <View style={style.container_cabecalho}>
                    <Image source={dima} style={style.dima} />
                    <Text style={style.nome}>Edmar Santos</Text>
                    <Text style={style.funcao}>Desenvolvedor Júnior</Text>
              
                </View>
                */}
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
    },
    nome: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10
    },
    funcao: {
        color: '#939393',
        marginBottom: 10

    }



})

export default App;
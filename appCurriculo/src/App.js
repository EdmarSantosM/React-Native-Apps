import React from 'react';
import {StyleSheet, View, Image } from 'react-native';

import dima from './assets/dima.jpg';

const App = () => {
    return (
        <>
          <View style={style.page}>
                <View>
                    <Image source={dima} />
                </View>
          </View>
        </>
    );
};

const style = StyleSheet.create({

    page: {
        backgroundColor: '#E7E7E7',
        flex: 1
    }
})

export default App;
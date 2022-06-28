import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Dolar from './components/coin';


function Home() {

    return (

        <>
        <StatusBar style="light" translucent={false} backgroundColor='#121212' />
        <View style={styles.container}>
            <Dolar />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#3706B3',
        width: '70%',
        textAlign: 'center',
        alignItems: 'center'

    },
    text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '700'
    }
});





export default Home
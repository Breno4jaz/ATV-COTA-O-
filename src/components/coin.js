import React, { useState }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import API from './api';
import Cotacao from './cotacao';

function Dolar() {

    const [cotacao, setCotacao] = useState(0);

    async function loadingCotacao() {
        const response = await API.get('json/last/USD-BRL');
        setCotacao(response.data.USDBRL);
        console.log(cotacao);
    }

    return (

        <>
            <TouchableOpacity style={styles.button} onPress={loadingCotacao}>
                <Text style={styles.text}>DÓLAR X REAL</Text>
            </TouchableOpacity>
            <Cotacao data={cotacao}/>
        </>
    )
}

const styles = StyleSheet.create({

    button: {
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: '#3706B3',
        width: '90%',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold'
    }
})


export default Dolar

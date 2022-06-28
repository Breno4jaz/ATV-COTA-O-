import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function Cotacao(props) {

    return (

        <View style={styles.dolarResultContainer}>

            <Text style={styles.text}>
                COMPRA: {props.data.bid}
            </Text>
            <Text style={styles.text}>
                % VARIAÇÃO: {props.data.pctChange}
            </Text>
            <Text style={styles.text}>
                VENDA: {props.data.ask}
            </Text>
            <Text style={styles.text}>
                MAXIMO: {props.data.high}
            </Text>
            <Text style={styles.text}>
                MINIMO: {props.data.low}
            </Text>
            <Text style={styles.text}>
                VARIAÇÃO: {props.data.varBid}
            </Text>
        </View>

    )


}

const styles = StyleSheet.create({
    dolarResultContainer: {
        width: '90%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#3a30B3',
        padding: 10,
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        color: '#FFf',
        paddingBottom: 10,
        marginLeft: '20%',
        alignSelf: 'flex-start',
        fontWeight: 'bold'

    }

})

export default Cotacao
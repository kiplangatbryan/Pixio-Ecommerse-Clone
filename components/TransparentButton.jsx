import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import sizing from '../constants/sizing';

export default function TransparentButton ( { onPress, label } ) {
    return (
        <Pressable
            onPress={ onPress }
            style={ styles.buttonContainer }
        >
            <Text style={ styles.buttonText }>{ label }</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create( {
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: sizing.sizing.radius,
        height: 40,
        backgroundColor: '#13111191'
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }



} );
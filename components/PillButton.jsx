import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

export default function PillButton ( { label, onPress } ) {


  return (
    <Pressable
      style={ styles.button }
      onPress={ onPress }
    >
      <Text style={ styles.buttonText }>
        { label }
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create( {
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderColor: '#000'
  },
  buttonText: {
    fontWeight: 'bold',
  }
} );
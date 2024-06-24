import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

export default function CustomInput ( { label, type } ) {
  return (
    <View>
      <Text style={ styles.label }>{ label }</Text>
      <TextInput
        style={ styles.input }
      >

      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create( {
  label: {},
  input: {},
} );
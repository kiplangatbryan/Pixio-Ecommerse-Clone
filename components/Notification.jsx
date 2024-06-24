import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Notification() {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10
    },
    
})
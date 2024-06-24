import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SectionTitle({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles  = StyleSheet.create({
  container: {
    maxWidth: 250,
  },
    title: {
      fontSize: 22,
      fontWeight: 'bold'
    }
})
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import dimesions from '../constants/sizing';


export default function ProductCard ( { product } ) {

  const { width } = Dimensions.get( 'window' );

  const imageWidth = ( width - ( dimesions.sizing.sm * 2 ) ) / 2 - 15;

  return (
    <View style={ [ styles.container, { width: imageWidth } ] }>
      {/* check platform specific implementation */}
      <Image source={ product.pictureUrl} style={ [ styles.image, { width: imageWidth } ] } />


      <View style={styles.floatingButton}>
        <TouchableOpacity
          onPress={ () => { } }>
          <View style={ styles.wishButton } >
            <Ionicons name='heart-outline' color='black' size={ 25 } />

          </View>
        </TouchableOpacity>

      </View>

      <View style={ styles.productInfo }>
        <Text style={ styles.title }>{
          product.label }
        </Text>

        <View style={ styles.info }>
          <View style={ styles.infoFlex }>
            <Text style={ styles.price }>
              { product.price }
            </Text>
            <Text style={ styles.oldPrice }>
              { product.price }
            </Text>
          </View>

          <View style={ styles.infoFlex }>
            <Ionicons name='star' color='yellow' />
            <Text style={ styles.reviews }>
              { '(2k Review)' }
            </Text>
          </View>
        </View>

      </View>
    </View>
  );
}



const styles = StyleSheet.create( {
  container: {
    width: 155,
    position: 'relative'
  },
  floatingButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  wishButton: {
    backgroundColor: '#f0e3da5e',
    borderRadius: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35
  },  
  image: {
    objectFit: 'contain',
    height: 180,
    borderRadius: dimesions.sizing.radius
  },
  productInfo: {
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17
  },
  infoFlex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginVertical: 5,
    flex: 1 / 2,
    flexDirection: 'row'
  },
  price: {
    fontWeight: 'bold',

  },
  oldPrice: {
    textDecorationLine: 'line-through'
  }
} );
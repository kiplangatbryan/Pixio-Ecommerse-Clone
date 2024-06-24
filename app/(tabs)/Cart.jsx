import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import sizing from '../../constants/sizing';
import CartContentHeader from '../../components/CartContentHeader';
import CartProductItem from '../../components/CartProductItem';

import products from '../../data/products'; 


export default function Page () {
  return (
    <ScrollView contentContainerStyle={{paddingHorizontal: 20 }}>
      <Stack.Screen
        options={ {
          headerLeft: () => (
            <TouchableOpacity
              onPress={ () => navigation.openDrawer() }>
              <View

                style={ { marginLeft: 20, width: 200 } }>


                <Text style={ {
                  fontSize: 22, fontWeight: 'bold'
                } }>
                  My Cart
                </Text>
                <Text style={ {
                  fontSize: 15, fontWeight: 'bold'
                } }>
                  8 items . Deliver to London.
                </Text>
              </View>
            </TouchableOpacity>
          ),


          headerRight: () => (
            <TouchableOpacity
              onPress={ () => { } }>
              <View
                style={ styles.customButton }
              >

                <Ionicons name='location-outline'  />
                <Text style={ styles.buttonText}>
                  change
                </Text>

              </View>
            </TouchableOpacity>
          ),
        } }
      >
      </Stack.Screen>
    


   <CartContentHeader isFreeDeliveryLegible={true} total={'$5000'} />
  
  {
      products.products.map((item) => <CartProductItem key={item.id} product={item} />)
  }
    </ScrollView>
  );
}

const styles = StyleSheet.create( {
  customButton: {
    height: 30,
    borderRadius: sizing.sizing.radius,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
     marginLeft: 5
  }


} );
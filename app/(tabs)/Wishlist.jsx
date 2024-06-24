import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

import React, { useState } from 'react';


import loadedProducts from '../../data/products';
import SectionTitle from '../../components/SectionTitle';
import PillButton from '../../components/PillButton';
import WishlistProductCard from '../../components/WishlistProductCard';

import dimensions from '../../constants/sizing'
import Spacer from '../../components/Spacer';

export default function Page () {

  const [ data ] = useState( loadedProducts );


  return (
    <ScrollView>
      <Stack.Screen
        options={ {
          headerLeft: () => (
            <TouchableOpacity
              onPress={ () => navigation.openDrawer() }>
              <View

                style={ { marginLeft: 20 } }>


                <Text style={ {
                  fontSize: 22, fontWeight: 'bold'
                } }>
                  Wishlist
                </Text>
                <Text style={ {
                  fontSize: 15, fontWeight: 'bold'
                } }>
                  8 items . Total $225
                </Text>
              </View>
            </TouchableOpacity>
          ),
        } }
      >
      </Stack.Screen>

      <Spacer style={ { marginTop: 10 } } />

      <FlatList
        showsHorizontalScrollIndicator={ false }
        horizontal={ true }
        data={ data['categories'] }
        style={ styles.sectionContainer }
        keyExtractor={ ( item ) => item.id }
        renderItem={ ( { item } ) =>
          <View style={ { marginLeft: 15 } }>
            <PillButton label={ item.name } onPress={ () => { } } />
          </View> }
      />



      {/* products list */ }

      <View style={ [ styles.sectionContainer, styles.productList ] }>
        {
          data['products'].map( ( product ) => <WishlistProductCard key={ product.id } product={ product } /> )
        }
      </View>




    </ScrollView>
  );
}

const styles = StyleSheet.create( {
  sectionContainer: {
      paddingHorizontal: dimensions.sizing.sm,
      paddingVertical: dimensions.sizing.xsm
  },
  productList: { 
      flex: 1/2,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
  }
} );
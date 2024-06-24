import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import React, { useState } from 'react';

import FeaturedProducts from '../../components/FeaturedProducts';
import FeaturedCategories from '../../components/FeaturedCategories';
import Wardrobe from '../../components/Wardrobe';
import NewArrivals from '../../components/NewArrivals';

import products from '../../data/products'; 
import Spacer from '../../components/Spacer';

export default function Page () {
  const theme = useTheme();

  const [ data, updateDate ] = useState( products );


  return (
    <ScrollView contentContainerStyle={ [
      styles.container,
      { backgroundColor: theme.colors.background } ] }>
      <Spacer style={ { marginTop: 10 } } />
      <FeaturedProducts products={ data[ 'featured-products' ] } />
      <FeaturedCategories categories={ data[ 'featured-categories' ] } />
      <Wardrobe categories={ data[ 'categories' ] } />
      <NewArrivals categories={ data[ 'categories' ] }  products={ data[ 'products' ] } />
    </ScrollView>
  );
}


const styles = StyleSheet.create( {
  container: {

  },
} );
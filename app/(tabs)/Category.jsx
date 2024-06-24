import { View, Text, ScrollView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

import CategoryCard from '../../components/CategoryCard';

import products from '../../data/products';
import PillButton from '../../components/PillButton';
import dimensions from '../../constants/sizing';

export default function Page () {
  const theme = useTheme();

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
                  Category
                </Text>

              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={ () => { } } style={ { marginRight: 15 } }>
              <MaterialIcons name='search' color={ theme.colors.icons } size={ 25 } />
            </TouchableOpacity >
          ),

        } }
      >
      </Stack.Screen>

      <FlatList
        data={ products[ 'featured-categories' ] }
        style={ { paddingBottom: 20 } }
        showsHorizontalScrollIndicator={ false }
        horizontal={ true }
        keyExtractor={ ( item ) => item.id }
        renderItem={ ( { item } ) => {

          return <View style={ styles.categoryContainer }>
            <Image
              style={ styles.image }
              source={ item.pictureUrl }
            />

            <PillButton label={ item.name } onPress={ () => { } } />
          </View>;
        }
        }
      />


      {/* all categories */ }
      <View style={ [ styles.sectionContainer, styles.productList ] }>
        {
          products.products.map( ( category ) => <CategoryCard key={ category.id } category={ category } /> )
        }
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create( {
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  sectionContainer: {
    paddingHorizontal: dimensions.sizing.sm,
    paddingVertical: dimensions.sizing.xsm
},
  productList: {
    flex: 1 / 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 15,
    marginHorizontal: 30,
  },
  image: {
    objectFit: 'cover',
    width: 80,
    height: 80,
  },

} );
import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

import PillButton from './PillButton';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import dimensions from '../constants/sizing'

export default function NewArrivals ( { categories, products } ) {
    return (
        <View>
            <View style={ styles.sectionContainer }>
                <SectionTitle title={ 'New Arrivals' } />
            </View>

            <FlatList
                showsHorizontalScrollIndicator={ false }
                horizontal={ true }
                data={ categories }
                style={ styles.sectionContainer }
                keyExtractor={ ( item ) => item.id }
                renderItem={ ( { item } ) =>
                    <View style={ { marginLeft: 10 } }>
                        <PillButton label={ item.name } onPress={ () => { } } />
                    </View> }
            />


            {/* products list */ }

            <View style={[ styles.sectionContainer, styles.productList ]}>
                {
                    products.map( ( product ) => <ProductCard key={ product.id } product={ product } /> )
                }
            </View>


        </View>
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
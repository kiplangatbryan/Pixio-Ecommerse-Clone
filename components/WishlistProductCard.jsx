import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import dimesions from '../constants/sizing';
import TransparentButton from './TransparentButton';


export default function WishlistProductCard ( { product } ) {

    const { width } = Dimensions.get( 'window' );

    const imageWidth = ( width - ( dimesions.sizing.sm * 2 ) ) / 2 - 15;

    const onPress = () => {

    };

    return (
        <View style={ [ styles.container, { width: imageWidth } ] }>

            <View style={ styles.imageContainer }>
                <Image source={ product.pictureUrl } style={ [ styles.image, { width: imageWidth } ] } />

                <View style={ styles.transparentButtonContainer }>
                    <TransparentButton onPress={ onPress } label={ 'Add to cart' } />
                </View>

            </View>


            <View style={ styles.floatingButton }>
                <TouchableOpacity
                    onPress={ () => { } }>
                    <View style={ styles.wishButton } >
                        <Ionicons name='close-outline' color='black' size={ 25 } />

                    </View>
                </TouchableOpacity>

            </View>

            <View style={ styles.floatingButton }>
                <TouchableOpacity
                    onPress={ () => { } }>
                    <View style={ styles.wishButton } >
                        <Ionicons name='close-outline' color='black' size={ 25 } />

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
    imageContainer: {
        height: 180,
        width: '100%',
        borderRadius: dimesions.sizing.radius,
        overflow: 'hidden',
        position: 'relative'
    },
    transparentButtonContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0
    },
    image: {
        objectFit: 'cover',
        width: "100%",
        height: "100%",
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
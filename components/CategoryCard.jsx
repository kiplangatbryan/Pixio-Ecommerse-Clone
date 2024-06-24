import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import dimensions from '../constants/sizing'
import TransparentButton from './TransparentButton';



export default function CategoryCard({ category }) {
    const onPress = () => {

    };

    const { width } = Dimensions.get( 'window' );

    const imageWidth = ( width - ( dimensions.sizing.sm * 2 ) ) / 2 - 15;


    return (
        <View style={ [ styles.container, { width: imageWidth } ] }>

            <View style={ styles.imageContainer }>
                <Image source={ category.pictureUrl } style={ [ styles.image, { width: imageWidth } ] } />

                <View style={ styles.transparentButtonContainer }>
                    <TransparentButton onPress={ onPress } label={ `${category.name} ${category.count | 20 } items)` } />
                </View>

            </View>


            <View style={ styles.floatingButton }>
                <TouchableOpacity
                    onPress={ () => { } }>
                    <View style={ styles.wishButton } >
                        <Ionicons name='heart-outline' color='black' size={ 25 } />

                    </View>
                </TouchableOpacity>

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
        borderRadius: dimensions.sizing.radius,
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
        flex: 1,
        objectFit: 'contain',
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
} );
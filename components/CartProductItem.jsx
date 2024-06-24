import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function CartProductItem ( { product } ) {
    return (
        <View style={ styles.container }>

            <View style={ styles.imageContainer }>
                <Image
                    source={ product.pictureUrl }
                    style={ styles.image }
                />


                <View style={ styles.floatingLikeButtonContainer }>
                    <TouchableOpacity
                        onPress={ () => { } }>
                        <View style={ styles.floatingLikeButton } >
                            <Ionicons name='heart-outline' color='black' size={ 25 } />

                        </View>
                    </TouchableOpacity>

                </View>
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
                        <Ionicons name='star' color='orange' />
                        <Text style={ styles.reviews }>
                            { '(2k Review)' }
                        </Text>
                    </View>
                </View>

                <Text style={ styles.offers }>
                    Free Delivery
                </Text>

                <View style={ styles.actionContainer }>
                    <View style={ styles.circleButtonContainer }>
                        <TouchableOpacity style={ styles.circleButton } onPress={ () => { } }>
                            <Text style={ styles.circleButtonText }>
                                -
                            </Text>
                        </TouchableOpacity>

                        <Text style={ styles.quantity }>
                            { 0 }
                        </Text>

                        <TouchableOpacity style={ styles.circleButton } onPress={ () => { } }>
                            <Text style={ styles.circleButtonText }>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={ () => { } } style={ styles.removeButton }>
                        <Ionicons name='trash-bin-outline' />
                        <Text style={ styles.removeText }>Remove</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginVertical: 10,
    },
    imageContainer: {
        position: 'relative',
        width: 140,
        height: 160
    },
    image: {
        objectFit: 'contain',
        width: '100%',
        borderRadius: 20,
        height: '100%'
    },
    floatingLikeButtonContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    floatingLikeButton: {
        backgroundColor: '#f0e3da5e',
        borderRadius: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35
    },
    productInfo: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    title: {
        fontWeight: 'bold',
        width: 200,
        marginBottom: 5,
        fontSize: 18
    },
    price: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    oldPrice: {
        textDecorationLine: 'line-through'
    },
    infoFlex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviews: {
        marginLeft: 8
    }, offers: {
        color: 'green',
        fontSize: 17,
        marginTop: 5,
        textTransform: 'uppercase',
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    actionContainer: {
        flex: 1 / 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    circleButtonContainer: {
        flex: 1,
        alignItems: 'center',
        flexGrow: 1,
        flexDirection: 'row'
    },
    circleButtonText: {
        color: '#fff'
    },
    quantity: {
        fontSize: 15,
        marginHorizontal: 10,
    },
    circleButton: {
        maxWidth: 30,
        height: 30,
        borderRadius: 40,
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    removeButton: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    removeText: {
        marginLeft: 10
    }

} );
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { uniqUuid } from '../utils/index';

export default function FeaturedProducts ( { products } ) {



    return (
        <FlatList
            bounces={ true }
            style={ styles.featuredContainer }
            horizontal={ true }
            data={ products }
            showsHorizontalScrollIndicator={ false }
            keyExtractor={ ( item ) => item.id }
            renderItem={ ( { item } ) =>
                <View style={ styles.container }>
                    <Text style={ styles.title }>
                        { item.label }
                    </Text>

                    <View style={ styles.optionsContainer }>
                        <View style={ styles.addGap } >
                            <Text style={ styles.subtitle }>Price</Text>
                            <Text style={ styles.price }>
                                { item.price }
                            </Text>
                        </View>
                        <View>
                            <Text style={ styles.subtitle }>Select Size</Text>
                            <View style={ styles.circleButtonContainer }>
                                {
                                    item.sizes.map( ( size ) => <TouchableOpacity
                                        key={ size }
                                        style={ styles.circleButton }>
                                        <Text>
                                            { size }
                                        </Text>
                                    </TouchableOpacity> )
                                }
                            </View>
                        </View>
                    </View>

                    <View style={ { flex: 1, justifyContent: 'flex-start' } }>
                        <Pressable
                            onPress={ () => { } }
                            style={ styles.actionButton }
                        >
                            <Text style={ styles.buttonText }>
                                View Details
                            </Text>
                        </Pressable>
                    </View>

                </View>

            }
        />
    );
}

const styles = StyleSheet.create( {
    fontConfig: {
        fontFamily: 'Inter',
    },
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        flex: 1,
    },
    featuredContainer: {

    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    addGap: {
        marginRight: 30,
    },
    optionsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 25,
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 4
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    circleButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
    },
    circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        height: 30,
        width: 30,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#fff',
    },
    actionButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 30,
        backgroundColor: "#000",
        height: 40,
        width: 150,
    },
    buttonText: {
        color: '#fff',
    }
} );
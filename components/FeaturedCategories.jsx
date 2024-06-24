import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';

import SectionTitle from './SectionTitle';
import PillButton from './PillButton';
import  dimensions from '../constants/sizing.js'

export default function FeaturedCategories ( { categories } ) {
    const theme = useTheme();

    return (
        <View style={
            { backgroundColor: theme.colors.secondary } }>

            <View style={ styles.sectionContainer }>
                <SectionTitle
                    title={ 'Featured Categories' }
                />
            </View>

            <FlatList
                data={ categories }
                showsHorizontalScrollIndicator={ false }
                style={ { paddingBottom: 20 } }
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




        </View>
    );
}


const styles = StyleSheet.create( {
    container: {
        paddingHorizontal: dimensions.sizing.lg,
        paddingVertical: dimensions.sizing.md,

    },
    sectionContainer: {
        paddingHorizontal: dimensions.sizing.lg,
        paddingVertical: dimensions.sizing.sm + 5,
    },
    categoryContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3,
        marginHorizontal: dimensions.sizing.md,
    },
    image: {
        objectFit: 'scale-down',
        width: 80,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#000'
    },
    buttonText: {
        fontWeight: 'bold'
    }
} );
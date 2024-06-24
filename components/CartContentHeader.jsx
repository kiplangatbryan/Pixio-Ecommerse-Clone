import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'

export default function CartContentHeader ( { total, isFreeDeliveryLegible } ) {
    return (
        <View style={styles.container}>
            <View style={ styles.flexTab }>
                <Text style={styles.subtitle}>Subtotal</Text>
                <Text style={[ styles.boldTitle, styles.subtitle ]}>{ total }</Text>
            </View>
            <View style={ styles.flexTab }>
             <Ionicons name='checkmark-circle' size={22} color={'green'}/>
              <Text style={styles.bannerText}>
                  Your order is eligible for free Delivery
              </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        marginVertical: 15,
    },
    subtitle: {
        fontSize: 22
    },
    flexTab: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    boldTitle: {
        fontWeight: 'bold',
        marginLeft: 10,
    },
    bannerText: {
        color: 'green',
        fontSize: 18,
        marginLeft: 10,
    }

} );
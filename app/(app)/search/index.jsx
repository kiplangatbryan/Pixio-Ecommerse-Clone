import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function Search () {
    return (
        <View>
            <Stack.Screen options={
                {
                    headerBackTitle: ''
                }
            }>

            </Stack.Screen>
        </View>
    );
}
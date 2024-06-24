import React from 'react';
import { TouchableOpacity } from 'react-native'
import { Drawer } from 'expo-router/drawer';

export default function SideDrawer () {
    return (
        <Drawer initialRouteName='(tabs)' detachInactiveScreens={true} >
            <Drawer.Screen
                name="(tabs)" // This is the name of the page and must match the url from root
                options={{
                    headerShown: false,
                    headerShadowVisible: false,
                    drawerLabel: 'Home',
                    title: 'overview',
                }}
            />
        </Drawer>




    );
}




import { View, Text, TouchableOpacity, Image, useColorScheme, ActivityIndicator } from 'react-native';
import { Tabs } from 'expo-router/tabs';
import { Ionicons, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableRipple, useTheme } from 'react-native-paper';

import Colors from '../../constants/Colors';
import { useExpoRouter } from 'expo-router/src/global-state/router-store';




export default function HomeLayout () {
  const theme = useTheme();
  const navigation = useNavigation();

  const router  = useExpoRouter()

  return (
    <Tabs
      screenOptions={ ( { route } ) => ( {
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'Inter-bold',
        },
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Inter-bold',
          color: '#fff'
        },
        headerShadowVisible: true,
        headerStyle: {
          backgroundColor: theme.colors.headerBackground
        },
        tabBarStyle: {
          backgroundColor: theme.colors.headerBackground
        },
        tabBarIcon: ( { focused, color, size } ) => {
          let iconName;
          if ( route.name === "index" ) {
            iconName = focused ? "home" : "home-outline";
          } else if ( route.name === "Wishlist" ) {
            iconName = focused ? "heart-circle" : "heart-outline";
          } else if ( route.name === "Cart" ) {
            iconName = focused ? "cart" : "cart-outline";
          }
          else if ( route.name === "Category" ) {
            iconName = focused ? "receipt" : "receipt-outline";
          }
          else if ( route.name === "Profile" ) {
            iconName = focused ? "person" : "person-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={ iconName } size={ size } color={ color } />;
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#000'


      } ) }
    >
      <Tabs.Screen
        name='index'
        options={ {
          tabBarLabel: "Home",

          headerLeft: () => (
            <TouchableOpacity
              onPress={ () => navigation.openDrawer() }>
              <View style={ {
                flex: 1,
                flexDirection: 'row', 
                alignItems: 'center',
                borderRadius: 30,
                height: 40,
              } }>
                <Image
                  source={ require( "../../assets/beto.jpeg" ) }
                  style={ {
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                    marginLeft: 25,
                  } }
                />

                <Text style={ {
                  marginLeft: 10, fontSize: 18, fontWeight: 'bold'
                } }>
                  Hello' Roopa
                </Text>
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={ { flex: 1, flexDirection: 'row', marginTop: 10 } }>

              <TouchableOpacity style={ { marginRight: 10 } } onPress={ () => router.push('notifications') }>

                <Ionicons name="notifications-outline" size={ 25 } color={ theme.colors.text } />

              </TouchableOpacity >
              <TouchableOpacity onPress={ () => router.push('search') } style={ { marginRight: 15 } }>
                <MaterialIcons name='search' color={ theme.colors.icons } size={ 25 } />
              </TouchableOpacity >
            </View>
          ),

        } }
      />

      <Tabs.Screen
        name='Wishlist'
        options={ {
  
          headerRight: () => (
            <View style={ { flex: 1, flexDirection: 'row', marginTop: 10 } }>

              
              <TouchableOpacity onPress={ () => { } } style={ { marginRight: 15 } }>
                <MaterialIcons name='search' color={ theme.colors.icons } size={ 25 } />
              </TouchableOpacity >
            </View>
          ),
        } }
      />

      <Tabs.Screen
        name='Cart'
     
      />

      <Tabs.Screen
        name='Category'
        options={ {
         
        } }
      />


      <Tabs.Screen
        name='Profile'
        options={ {
         
        } }
      />

    </Tabs>
  );
}
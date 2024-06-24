import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { useTheme } from 'react-native-paper';
import { useExpoRouter } from 'expo-router/src/global-state/router-store';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import sizing from '../../constants/sizing';



const CustomButton = ( { label } ) => {

  const { width } = Dimensions.get( 'window' );


  const buttonWidth = ( width - ( sizing.sizing.md * 2 ) ) / 2 - 10;



  return <TouchableOpacity onPress={ () => { } } style={ [ styles.roundedButton, { minWidth: buttonWidth } ] }>
    <Text style={ styles.roundedText }>
      { label }
    </Text>
  </TouchableOpacity>;
};

const SectionHeader = ( { label } ) => {
  return <Text style={ styles.sectionHeader }>{ label }</Text>;

};


const PageLink = ( { icon, label, route } ) => {

  const router = useExpoRouter();

  const routeTo = () => {
    router.push( `(app)/${ route }` );
  };

  return <TouchableOpacity onPress={ () => routeTo() } style={ styles.pageLink }>
    <Text style={ styles.icon }>
      <Ionicons name={ icon } size={ 22 } style={ styles.icon } />
    </Text>
    <View style={ styles.spacer }></View>
    <Text style={ styles.linkText }>{ label }</Text>
  </TouchableOpacity>;
};

export default function Page () {
  const theme = useTheme();



  return (
    <ScrollView>


      <Stack.Screen
        options={ {
          headerStyle: {
            backgroundColor: styles.headerBackground
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={ () => navigation.openDrawer() }>
              <View
                style={ { marginLeft: 20 } }>
                <Text style={ {
                  fontSize: 22, fontWeight: 'bold'
                } }>
                  Settings
                </Text>

              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={ { flex: 1, flexDirection: 'row', marginTop: 10 } }>

              <TouchableOpacity style={ { marginRight: 10 } } onPress={ () => { } }>

                <Ionicons name="notifications-outline" size={ 25 } color={ theme.colors.text } />

              </TouchableOpacity >
              <TouchableOpacity onPress={ () => { } } style={ { marginRight: 15 } }>
                <MaterialIcons name='search' color={ theme.colors.icons } size={ 25 } />
              </TouchableOpacity >
            </View>
          ),

        } }
      >
      </Stack.Screen>



      {/* shortcut menu */ }

      <View style={ styles.header }>
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
              width: 40,
              height: 40,
              borderRadius: 100,
            } }
          />

          <Text style={ {
            marginLeft: 10, fontSize: 20, fontWeight: 'bold'
          } }>
            Hello' Roopa
          </Text>
        </View>
        <View style={ styles.shortcutMenuContainer }>
          <CustomButton label={ 'Your Order' } />
          <CustomButton label={ 'Wishlist' } />
          <CustomButton label={ 'Coupon' } />
          <CustomButton label={ 'Track Order' } />
        </View>
      </View>

      {/* menu */ }

      <View style={ styles.menuContainer }>
        <SectionHeader label={ 'Account Settings' } />
        <PageLink icon={ 'person-outline' } route={ 'settings/EditProfile' } label={ 'Edit Profile' } />
        <PageLink icon={ 'card-outline' } route={ 'settings/EditCard' } label={ 'Saved Cards' } />
        <PageLink icon={ 'location-outline' } route={ 'settings/EditLocations' } label={ 'Saved Addresses' } />
        <PageLink icon={ 'language-outline' } route={ 'settings/EditProfile' } label={ 'Select Language' } />
        <PageLink icon={ 'notifications-outline' } route={ 'settings/notifications' } label={ 'Notification Settings' } />
        <PageLink icon={ 'star-outline' } route={ 'settings/AddReview' } label={ 'Reviews' } />
        <PageLink icon={ 'document-text-outline' } route={ 'settings/Faqs' } label={ 'Questions &  Answers' } />
        <PageLink icon={ 'document-text-outline' } route={ 'about' } label={ 'About Us' } />
      </View>



    </ScrollView>
  );
}

const styles = StyleSheet.create( {
  headerBackground: {
    backgroundColor: '#eaac1836',
  },
  header: {
    backgroundColor: '#eaac1836',
    paddingVertical: sizing.sizing.md,
    paddingHorizontal: sizing.sizing.md,
  },
  shortcutMenuContainer: {
    flex: 1 / 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingVertical: 25
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 10,
  },
  menuContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff'
  },
  roundedButton: {
    borderRadius: 30,
    backgroundColor: '#fff',
    height: 50,
    flexShrink: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  roundedText: {
    fontSize: 20
  },
  icon: {
    marginRight: 10
  },
  pageLink: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  linkText: {
    fontSize: 22,
  },
  spacer: {
    marginHorizontal: 3,
  }
} );
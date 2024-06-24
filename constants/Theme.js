/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, useColorScheme, View as DefaultView, FlatList as DefaultFlatList } from 'react-native';
import { configureFonts, MD3Theme as DefaultTheme , adaptNavigationTheme } from 'react-native-paper';
import { Dimensions } from 'react-native';

import {
        DarkTheme as NavigationDarkTheme,
        DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import {
    MD3DarkTheme,
    MD3LightTheme,
} from 'react-native-paper';

import Colors from './Colors';

const baseFont = {
    fontFamily: 'Inter',
} 

const baseVariants = configureFonts( { config: baseFont } );

// Then, define custom fonts for different variants

const customVariants = {
    // Customize individual base variants:
    displayMedium: {
        ...baseVariants.displayMedium,
        fontFamily: 'Inter-bold',
    },
} 


const { LightTheme, DarkTheme } = adaptNavigationTheme( {
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
} );



export const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        ...LightTheme.colors,
        ...Colors.light
    },
    fonts: configureFonts( {
        config: {
            ...baseVariants,
            ...customVariants,
        }
    } )
};

export const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        ...DarkTheme.colors,
        ...Colors.dark

    },
    fonts: configureFonts( {
        config: {
            ...baseVariants,
            ...customVariants,
        }
    })
};

export const sizes = {
    width: Dimensions.get('window').width,
    height: Dimensions.get( 'window' ).width,
    radius: 10,
}


export const spacing = {
    s: 5,
    l: 20,
    xl: 25,
    md: 10
}

export function useThemeColor (
    props,
    colorName
) {
    const theme = useColorScheme() ?? 'light';
    const colorFromProps = props[ theme ];

    if ( colorFromProps ) {
        return colorFromProps;
    } else {
        return Colors[ theme ][ colorName ];
    }
}


export function Text ( props ) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor( { light: lightColor, dark: darkColor }, 'text' );

    return <DefaultText style={[ { color }, style ]} {...otherProps} />;
}

export function View ( props ) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor( { light: lightColor, dark: darkColor }, 'background' );

    return <DefaultView style={[ { backgroundColor }, style ]} {...otherProps} />;
}


export function FlatList ( props ) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor( { light: lightColor, dark: darkColor }, 'background' );

    return <DefaultFlatList style={[ { backgroundColor }, style ]} {...otherProps} />;
}



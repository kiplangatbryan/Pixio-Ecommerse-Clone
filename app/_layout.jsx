import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native'
import { useExpoRouter } from 'expo-router/src/global-state/router-store';
import { PaperProvider, useTheme } from 'react-native-paper';

import { PreferencesContext } from '../constants/context';
import { CombinedDarkTheme, CombinedDefaultTheme } from '../constants/Theme';
import SideDrawer from './drawer';
// import { initializeDatabase } from '../utils/db';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout () {
 
  // check system theme
  const uiTheme = useColorScheme()

    const [loaded, error] = useFonts({
        "Inter": require('../assets/fonts/Inter/static/Inter-Regular.ttf'),
        "Inter-medium": require('../assets/fonts/Inter/static/Inter-Medium.ttf'),
        "Inter-light": require('../assets/fonts/Inter/static/Inter-Light.ttf'),
        "Inter-thin": require('../assets/fonts/Inter/static/Inter-Thin.ttf'),
        "Inter-bold": require('../assets/fonts/Inter/static/Inter-Bold.ttf'),
        ...FontAwesome.font,
    } );
  
   const [isThemeDark, setIsThemeDark] = React.useState(uiTheme  == "dark" ? true : false);
  
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [ loaded ] );

 
  
    const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );


  if (!loaded) {
    return null;
  }



  // let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  
  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme
  return (
    <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme}>
        <RootLayoutNav />
          <StatusBar style="auto" />
        </PaperProvider>
    </PreferencesContext.Provider>

  );
}

function RootLayoutNav() {
  const uiTheme = useColorScheme()
  const theme = useTheme()  
  
  const router = useExpoRouter()

  return (
    <SideDrawer />
  );
}
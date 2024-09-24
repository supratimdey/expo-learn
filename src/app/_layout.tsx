import { Stack } from 'expo-router/stack';
import {  StyleSheet, useColorScheme } from 'react-native';

import {
  MD3LightTheme,
  adaptNavigationTheme,
  PaperProvider,
  MD3DarkTheme
} from 'react-native-paper';

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider
} from '@react-navigation/native';

import merge from 'deepmerge'

import { Colors } from '@/constants/Colors';

// combile the two themes togethor 
const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark }
const customLightTheme = { ...MD3LightTheme, colors: Colors.light }

// adapt the navigation theme to the paper theme
const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
})
// merge the  papertheme with the custom theme 
const CombinedDefaultTheme =  merge(LightTheme, customLightTheme   )
const CombinedDarkTheme =  merge(DarkTheme, customDarkTheme  )

export default function Layout() {

  // get the current theme 
  const colorScheme = useColorScheme();

  // based on the theme mode select the combined theme dark or light 
  const paperTheme = colorScheme === 'dark' ?
    CombinedDarkTheme :
    CombinedDefaultTheme
  
    colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme
 
  
  return (
    // wrap with paper provider to use the paper components
    // wrap with navigation theme provider to use the navigation components
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={paperTheme}>
     <Stack >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        </ThemeProvider>
    </PaperProvider>
  );
}
 
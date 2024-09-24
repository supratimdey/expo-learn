# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```npm install react-native-paper
      npm install deepmerge

     
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
 
```
2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

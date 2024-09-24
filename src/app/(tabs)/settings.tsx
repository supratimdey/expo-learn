import Greet from '@/src/components/greet/greet';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
 

export default function Tab() {

  // const colorScheme = useColorScheme();

  // const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  // const themeContainerStyle = 
  //   colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab [Settings] </Text>
          <Greet title="Supratim"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});
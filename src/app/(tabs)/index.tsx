import Greet from '@/src/components/greet/greet';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'https://picsum.photos/600' }} style={{ flex: 1 }}>  
        <View style=  {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tab [Home] </Text>
          <Link href="/a-index" style={{ color: 'green', fontWeight: 'bold' }}> Go to another view </Link>
          <Image source={{ uri: 'https://picsum.photos/300' }} style={{ width: 300, height: 300 , borderRadius:10 }} />      
         
        </View>  
     
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    // alignItems: 'center',
  },
});
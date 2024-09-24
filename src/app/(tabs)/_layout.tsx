import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View,  StyleSheet,  useColorScheme } from 'react-native';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  
  const colorScheme = useColorScheme();

 
 
 
  
  return (
  

   
    
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}
           
          />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      </Tabs>
       
    
  );
}




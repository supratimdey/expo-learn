

import { View, Text, StyleSheet } from 'react-native';
import Greet from '../components/greet/greet';
 

// create a component
const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.boldText}>Hello world</Text>
            <Greet title="Supratim"/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFFFF',
    },
    boldText: {
        fontWeight: 'bold',
        color: 'blue'
         
    }
});

//make this component available to the app
export default Index;

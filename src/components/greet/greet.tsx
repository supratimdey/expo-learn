
import React, { Component } from 'react';
import {  Text,  Button,  } from 'react-native-paper';
import { View, StyleSheet, Pressable } from 'react-native';
import { Colors } from '@/constants/Colors';

interface GreetProps {
    title: string;
    count?: number;
}

// create a component
const Greet : React.FC<GreetProps> = ({ title, count = 0}  ) => {
    return (
        <View  >
            <Pressable style={styles.pressContainer} onPress={() => alert('Text Component clicked')}>
                
                <Text>Greetings my friend  {title}</Text>

            </Pressable>
            
            <Button icon="camera" mode='contained' 
             onPress={() => alert('Button clicked')} >
                Press me</Button>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    pressContainer: {
        padding: 10,
        backgroundColor: Colors.dark.backdrop,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10
    }
});

//make this component available to the app
export default Greet;

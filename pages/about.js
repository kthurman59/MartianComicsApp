import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => (
    <View style={styles.container}>
      <Text>About Martian Comics</Text>
      <Text>Here you include info about your company</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default About;

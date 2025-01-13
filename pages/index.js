import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Home = () => (
    <View style={styles.container}>
      <Text>Welcome to Martian comics!</Text>
      <Link href="/comics">
        <Button title="Explore Comics" />
      </Link>
      <Link href="/blog">
        <Button title="Visit Blog" />
      </Link>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;

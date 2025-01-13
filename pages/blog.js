import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

cont Blog = () => (
  <View style={Styles.container}>
    <Text>Welcome to the Martian Comics Blog!</Text>
    {/* Add your blog post links or content here */}
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Blog;

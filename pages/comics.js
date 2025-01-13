import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Comics = () => (
    <View style={styles.container}>
      <Text>Check out the latest comics!</Text>
      {/* Example comic links */}
      <Link href="/comic/1">
        <Button title="Comic 1" />
      </Link>
      <Link href="/comic/2">
        <Button title="Comic 2" />
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

export default Comics;

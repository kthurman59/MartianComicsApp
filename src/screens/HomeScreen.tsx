import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { comics } from '../data/comics'; // Import the comics data

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {comics.map((comic) => (
        <TouchableOpacity
          key={comic.id}
          onPress={() =>
            navigation.navigate('ComicViewer', { pages: comic.pages })
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>{comic.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default HomeScreen;


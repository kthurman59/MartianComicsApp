import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window'); // Get the device width for scaling images

interface ComicViewerProps {
  route: RouteProp<{ params: { pages: string[] } }, 'params'>;
}

const ComicViewer: React.FC<ComicViewerProps> = () => {
  const route = useRoute<ComicViewerProps['route']>();
  const { pages } = route.params; // Get the pages passed from HomeScreen
  const [progress, setProgress] = useState<number>(0); // Save progress index

  const renderPage = ({ item, index }: { item: string; index: number }) => {
    return (
      <View key={index} style={styles.pageContainer}>
        <Image
          source={{ uri: item }}
          style={styles.pageImage}
          resizeMode="contain" // Ensures the image scales properly
        />
      </View>
    );
  };

  const handleScroll = (event: any) => {
    // Calculate current visible page index
    const currentIndex = Math.round(
      event.nativeEvent.contentOffset.y / Dimensions.get('window').height
    );
    setProgress(currentIndex);
  };

  const saveProgress = () => {
    console.log(`Saved progress at page ${progress + 1}`);
    // You can integrate AsyncStorage or local storage here to persist progress
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pages}
        renderItem={renderPage}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled // Enables snapping to pages
        onScroll={handleScroll} // Track scrolling progress
        scrollEventThrottle={16} // Optimize scroll event handling
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.saveButton} onPress={saveProgress}>
        <Image
          source={{
            uri: 'https://img.icons8.com/ios-filled/50/save--v1.png',
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
  },
  pageImage: {
    width: width,
    height: Dimensions.get('window').height,
  },
  saveButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 25,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default ComicViewer;


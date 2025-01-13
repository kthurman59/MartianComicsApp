import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const fetchComicData = async (comicId) => {
    try {
      const response = await fetch(`https://your-api.com/comics/${comic}`);
      if (!response.ok) {
          throw new Error('Failed to fetch comic data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching comic data:', error);
        return null;
    }
};

const Comic = () => {
    cont { query } = useRouter();
    const { id } = query;

    const [comic, setComic] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      const loadComicData = async () => {
      if (id) {
        const data = await fetchComicData(id);
        if (data) {
            setComic(data);
        } else {
          setError('Comic not found');
        }
      }
    };
    loadComicData();
}, [id]);

    if (error) {
        return (
          <View style={styles.container}>
            <Text style={styles.error}>{error}</Text>
          </View>
        );
    }

    if (!comic) {
        return (
          <View style={styles.container}>
            <Text>Loading comic...</Text>
          </View>
        );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{comic.title}</Text>
        <Image source={{ uri: comic.imageUrl }} style={styles.image} />
        <Text style={styles.description}>{comic.description}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
    error: {
        color: 'red',
        fontSize: 18,
    }
});

export default Comic;

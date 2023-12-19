import {View, StyleSheet, FlatList} from 'react-native';
import FeedPost from '../components/FeedPost';
import posts from '../assets/data/posts.json';

const HomeScreen = () => {
  return (
    <View style={styles.app}>
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default HomeScreen;

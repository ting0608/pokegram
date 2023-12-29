import React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import FeedPost from './src/components/FeedPost/FeedPost';
//import PsyPlay from '../images/psyPlay.png';
import posts from './src/assets/data/posts.json';
import HomeScreen from './src/screens/Homescreen';
import CommentScreen from './src/screens/CommentsScreen/CommentScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import Comment from './src/components/Comment';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';

const App = () => {
  return (
    <View style={styles.app}>
      {/* {posts.map(post => (
        <FeedPost key={post.id} post={post} />
      ))} */}
      <EditProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default App;

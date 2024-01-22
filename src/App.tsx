import React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import FeedPost from './components/FeedPost/FeedPost';
//import PsyPlay from '../images/psyPlay.png';
import posts from './assets/data/posts.json';
import HomeScreen from './screens/Homescreen';
import CommentScreen from './screens/CommentsScreen/CommentScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import Comment from './components/Comment';
import EditProfileScreen from './screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from './screens/PostUploadScreen';
import Navigation from './navigation';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return <Navigation />;
};

export default App;

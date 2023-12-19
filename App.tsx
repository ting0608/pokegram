import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import FeedPost from './src/components/FeedPost/FeedPost';
//import PsyPlay from '../images/psyPlay.png';

const post = {
  id: 'p-1',
  createdAt: '19 December 2023',
  //works path issue mtfk
  image: require('./src/assets/images/psyPlay.png'),
  description:
    'Family gathering to engage in our favorite pastime—playing in the water on a warm and sunny day at the edge of Lake Psyduck.',
  user: {
    image: 'https://img.pokemondb.net/artwork/large/psyduck.jpg',
    username: 'Psyduck',
  },
  nofComments: 12,
  nofLikes: 703,
  comments: [
    {
      id: 'p-1-1',
      comment: 'Wish i could join😭😭 But Ash-san never treats me day off 😭',
      user: {
        username: 'Pikachu',
      },
    },
    {
      id: 'p-1-2',
      comment: 'Where is this buffet located?',
      user: {
        username: 'Cramorant',
      },
    },
  ],
};

const post2 = {
  id: 'p-2',
  createdAt: '13 December 2023',
  //works path issue mtfk
  image: require('./src/assets/images/pika1.jpg'),
  description: 'One of the best selfie ever taken by me.',
  user: {
    image: 'https://img.pokemondb.net/artwork/avif/pikachu.avif',
    username: 'Pikachu',
  },
  nofComments: 2,
  nofLikes: 1,
  comments: [
    {
      id: 'p-2-1',
      comment: 'Did i just commented me myself?',
      user: {
        username: 'Pikachu',
      },
    },
    {
      id: 'p-2-2',
      comment: 'Somebody reply to me please.',
      user: {
        username: 'Pikachu',
      },
    },
  ],
};

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={post} />
      <FeedPost post={post2} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default App;

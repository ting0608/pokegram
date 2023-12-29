import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {IPost} from '../../types/models';
import FeedGridItem from './FeedGridItem';

interface IFeedGridView {
  data: IPost[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

// Your code goes here
const FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <FeedGridItem post={item} />}
      numColumns={3}
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      style={{marginLeft: -1}}
    />
  );
};

export default FeedGridView;

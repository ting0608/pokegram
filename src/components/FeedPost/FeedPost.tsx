import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/font';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
//import PsyPlay from '../../assets/images/psyPlay.png';
import styles from './styles';
import Comment from '../Comment/Comment';
import {IPost} from '../../types/models';

interface IFeedPost {
  post: IPost;
}

const FeedPost = (props: IFeedPost) => {
  const {post} = props;
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      <Image source={{uri: post.image}} style={styles.image} />
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        <Text>
          Liked by <Text style={{fontWeight: fonts.weight.bold}}>Pikachu</Text>{' '}
          and{' '}
          <Text style={{fontWeight: fonts.weight.bold}}>
            {post.nofLikes} others
          </Text>
        </Text>

        {/* Post desc */}
        <Text style={styles.text}>
          <Text style={{fontWeight: fonts.weight.bold}}>
            {post.user.username}
          </Text>{' '}
          {post.description}
        </Text>

        {/* comments */}
        <Text style={styles.text2}>View all {post.nofComments} comments</Text>
        {post.comments.map((comment: any) => (
          <Comment key={comment.id} post={post} comment={comment} />
        ))}

        <Text style={styles.text2}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;

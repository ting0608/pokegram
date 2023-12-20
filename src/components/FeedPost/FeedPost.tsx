import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
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
import {useState} from 'react';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {
  //const {post} = props;
  const state = useState(false);
  // const isDescriptionExplained = state[0];
  // // isDescriptionExplained = false;
  // const setIsDescriptionExplained = state[1];
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v);
  };

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  //carousel begins here
  let content;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image source={{uri: post.image}} style={styles.image} />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  }

  // let lastTap = 0;
  // const handleDoublePress = () => {
  //   const now = Date.now();
  //   if (now - lastTap < 300) {
  //     toggleLike();
  //   }
  //   lastTap = now;
  // };

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
      {/* <DoublePressable onDoublePress={toggleLike}>{content}</DoublePressable> */}

      {content}

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
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
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={{fontWeight: fonts.weight.bold}}>
            {post.user.username}
          </Text>{' '}
          {post.description}
        </Text>
        <Text style={styles.text2} onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
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

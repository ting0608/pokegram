import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import fonts from '../../theme/font';
import {IComment} from '../../types/models';
import {useState} from 'react';

interface ICommentProps {
  comment: IComment;
  includeDetails?: boolean;
}

const Comment = ({comment, includeDetails = false}: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(v => !v);
  };
  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}
      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={{fontWeight: fonts.weight.bold}}>
            {comment.user.username}
          </Text>{' '}
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      {/* hitSlop is to increase the touchable area of the icon */}
      <Pressable onPress={toggleLike} hitSlop={5}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={14}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black} // Use the 'colors' module to set the color
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    //flexDirection: 'row',
    marginHorizontal: 5,
  },
  //footer: {padding: 10},

  bold: {fontWeight: fonts.weight.bold},

  comment: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},

  commentText: {
    // color: colors.black,
    // backgroundColor: colors.lightGray,
    //flex: 1,
    lineHeight: 18,
  },
  text2: {
    // color: colors.black,
    // backgroundColor: colors.lightGray,
    //sflex: 1,
    fontSize: 12,
    color: colors.gray,
    padding: 2,
  },

  avatar: {
    width: 40,
    //height: 30,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5,
  },

  footer: {
    flexDirection: 'row',
    //marginHorizontal: 5,
  },

  footerText: {
    color: colors.gray,
    marginRight: 10,
  },

  middleColumn: {
    flex: 1,
  },
});

export default Comment;

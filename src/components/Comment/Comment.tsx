import {View, Text, Image, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import fonts from '../../theme/font';
import {IComment} from '../../types/models';

interface ICommentProps {
  post: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={{fontWeight: fonts.weight.bold}}>
          {comment.user.username}
        </Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign
        name={'hearto'}
        size={14}
        style={styles.icon}
        color={colors.black} // Use the 'colors' module to set the color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    //flexDirection: 'row',
    marginHorizontal: 5,
  },
  footer: {padding: 10},

  bold: {fontWeight: fonts.weight.bold},
  comment: {flexDirection: 'row', alignItems: 'center'},

  commentText: {
    // color: colors.black,
    // backgroundColor: colors.lightGray,
    flex: 1,
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
});

export default Comment;

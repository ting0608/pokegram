import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/font';

export default StyleSheet.create({
  post: {
    flex: 1,
    //backgroundColor: 'red',
    paddingBottom: 30,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    height: '50%',
    //overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 20,
    //backgroundColor: colors.black,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
    //marginBottom: 5,
    paddingBottom: 5,
    // borderColor: colors.lightGray,
    // borderWidth: 1,
  },
  icon: {
    //flexDirection: 'row',
    marginHorizontal: 5,
  },
  footer: {padding: 10},
  text: {
    color: colors.black,
    lineHeight: 18,
  },

  bold: {fontWeight: fonts.weight.bold},
  comment: {flexDirection: 'row', alignItems: 'center'},

  text2: {
    // color: colors.black,
    // backgroundColor: colors.lightGray,
    //sflex: 1,
    fontSize: 12,
    color: colors.gray,
    padding: 2,
  },
});

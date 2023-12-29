import {StyleSheet} from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../theme/font';

export default StyleSheet.create({
  root: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  numberContainer: {
    alignItems: 'center',
  },
  numberText: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,
    color: Colors.black,
  },

  name: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,
    color: Colors.black,
  },

  bio: {
    fontSize: fonts.size.s,
    color: Colors.black,
  },
});

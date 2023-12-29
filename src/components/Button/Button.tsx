import {View, Text, Pressable, StyleSheet} from 'react-native';
import colors from '../../theme/colors';
//import styles from '../FeedPost/styles';

interface Ibutton {
  text?: string;
  onPress?: () => void;
}

const Button = ({text = '', onPress = () => {}}: Ibutton) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    flex: 1,
    margin: 5,
  },
  text: {
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default Button;

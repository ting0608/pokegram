import {View, Text, Image, FlatList} from 'react-native';
import user from '../../assets/data/user.json';
import styles from './styles';
import Button from '../../components/Button';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
//ps: always make sure you dont put scrollView in another scrollview with same direction

// const styles = StyleSheet.create({
//   container: {},
//   text: {},
// });

const ProfileScreen = () => {
  return (
    //<View style={styles.container}>
    <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />
  );
};

export default ProfileScreen;

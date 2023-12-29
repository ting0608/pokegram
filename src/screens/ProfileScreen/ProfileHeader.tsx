import {View, Text, Image} from 'react-native';
import user from '../../assets/data/user.json';
import styles from './styles';
import Button from '../../components/Button';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      {/* 1st header from here */}
      <View style={styles.headerRow}>
        <Image source={{uri: user.image}} style={styles.avatar} />
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>398</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>998</Text>
          <Text>Following</Text>
        </View>
      </View>
      {/* 1st header ends here */}
      {/* 2nd header from here */}
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>

        {/*button*/}
        <View style={{flexDirection: 'row'}}>
          <Button
            text="Edit Profile"
            onPress={() => console.warn('Edit Profile')}
          />
          <Button text="Another button" onPress={() => console.warn('xx')} />
        </View>
      </View>
      {/*GridViewPost*/}
      {/* <FlatList
          data={user.posts}
          renderItem={({item}) => (
            <Image
              source={{uri: item.image || item.images[0]}}
              style={{flex: 1, aspectRatio: 1, margin: 1, maxWidth: '33%'}}
            />
          )}
          numColumns={3}
          //keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          // viewabilityConfig={viewabilityConfig}
          // onViewableItemsChanged={onViewableItemsChanged.current}
        /> */}
    </View>
  );
};

export default ProfileHeader;

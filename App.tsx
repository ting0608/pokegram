import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/font';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import PsyPlay from './src/assets/images/psyPlay.png';

const App = () => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://img.pokemondb.net/artwork/large/psyduck.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>Psyduck</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      <Image source={PsyPlay} style={styles.image} resizeMode="cover" />
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
          and <Text style={{fontWeight: fonts.weight.bold}}>702 others</Text>
        </Text>

        {/* Post desc */}
        <Text style={styles.text}>
          <Text style={{fontWeight: fonts.weight.bold}}>Psyduck</Text> Family
          gathering to engage in our favorite pastime—playing in the water on a
          warm and sunny day at the edge of Lake Psyduck.
        </Text>

        {/* comments */}
        <Text style={styles.text2}>View all 12 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={{fontWeight: fonts.weight.bold}}>Pikachu</Text> Wish i
            could join😭😭 But Ash-san never treats me day off 😭
          </Text>
          <AntDesign
            name={'hearto'}
            size={14}
            style={styles.icon}
            color={colors.black}
          />
        </View>
        <Text style={styles.text2}>18 December 2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  image: {
    //width: '100%',
    aspectRatio: 4 / 3,
    height: '50%',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 20,
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

export default App;

import {useState} from 'react';
import React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const Input = () => {
  const [newComment, setNewComment] = useState(''); // [state, setState
  const onPost = () => {
    console.warn('Posting your comment', newComment);
    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{uri: 'https://img.pokemondb.net/artwork/large/psyduck.jpg'}}
        style={styles.image}
      />
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Add a comment..."
        style={styles.input}
        multiline={true}
      />
      <Text onPress={onPost} style={styles.button}>
        Post
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 15,
    borderTopWidth: 1,
    borderColor: colors.lightGray,
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 40,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    height: 40,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 5,
    paddingRight: 50,
  },

  button: {
    marginTop: 10,
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default Input;

import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, TextInput} from 'react-native';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import font from '../../theme/font'; // Import the necessary font module

interface ICustomInput {
  label: string;
  multiline?: boolean;
}

const CustomInput = ({label, multiline = false}) => (
  // Add the return statement to return the JSX elements
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput placeholder={label} style={styles.input} multiline={multiline} />
  </View>
);

const EditProfileScreen = () => {
  const onSubmit = () => {
    console.warn('Submit');
  };

  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>
      <CustomInput label="Name" />
      <CustomInput label="Username" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline />

      <Text onPress={onSubmit} style={styles.textButton}>
        Make Changes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: font.size.md, // Define the 'fonts' object and access the 'md' size
    fontWeight: font.weight.semi, // Define the 'fonts' object and access the 'bold' weight
    margin: 10,
  },
  inputContainer: {
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    //backgroundColor: 'red',
    color: colors.gray,
  },
  label: {
    width: 75,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
});

export default EditProfileScreen;

import {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TextInput} from 'react-native';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import font from '../../theme/font'; // Import the necessary font module
import {useForm, Controller, Control} from 'react-hook-form';
import {IUser} from '../../types/models';
import {
  launchImageLibrary,
  ImagePickerResponse,
  Asset,
} from 'react-native-image-picker';

const URL_REGEX =
  '[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/i';

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  control: Control<IUser, object>;
  label: string;
  name: IEditableUserField;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({
  control,
  name,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        // Add the return statement to return the JSX elements
        //console.log('field error');
        //console.log(errors);
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              style={[
                styles.input,
                {borderColor: error ? colors.error : colors.border},
              ]}
              multiline={multiline}
            />
            {error && (
              <Text style={{color: colors.error}}>
                {error.message || 'Error'}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

const EditProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.warn('Submit', data);
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length) {
          //console.log(assets);
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri || user.image}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change profile photo
      </Text>
      <CustomInput
        name="name"
        control={control}
        rules={{required: 'Name is required'}}
        label="Name"
      />
      <CustomInput
        name="username"
        control={control}
        rules={{
          required: 'Username required',
          minLength: {value: 3, message: 'Min length is 3'},
        }}
        label="Username"
      />
      <CustomInput
        name="website"
        control={control}
        rules={{
          required: 'Website where? you idiot',
          pattern: URL_REGEX,
          message: 'Invalid URL',
        }}
        label="Website"
      />
      <CustomInput
        name="bio"
        control={control}
        rules={{required: 'Bio required'}}
        label="Bio"
        multiline
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
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
    //flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
});

export default EditProfileScreen;

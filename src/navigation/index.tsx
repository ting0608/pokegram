import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Homescreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, Image} from 'react-native';
import logo from '../assets/images/Logo_pokegram.png';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Feed"
          component={HomeScreen}
          options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{width: 150, height: 40, padding: 10}}
    />
  );
};

export default Navigation;

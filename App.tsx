import React from 'react';
import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/font';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary, fontSize: font.size.xl}}>
        Hell0
        <AntDesign name="stepforward" size={30} />
      </Text>
    </View>
  );
};

export default App;

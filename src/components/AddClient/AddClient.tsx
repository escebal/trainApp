import React from 'react';
import {View} from 'react-native';
import CustomTextInput from '../TextInput/CustomTextInput';

const AddClient = () => {
  return (
    <View>
      <CustomTextInput placeholder="Nombres" />
      <CustomTextInput placeholder="Apellidos" />
      <CustomTextInput placeholder="Email" />
   
    </View>
  );
};

export default AddClient;

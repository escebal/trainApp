import React from 'react';
import {FlatList, Text, View} from 'react-native';

const ClientProfile = () => {
  const profileOptions = {
    {
      id: '005',
      name: ""
    }
  }
  return (
    <View>
      <View>
        <Text>Foto</Text>
      </View>
      <FlatList 
      data={}
    </View>
  );
};

export default ClientProfile;

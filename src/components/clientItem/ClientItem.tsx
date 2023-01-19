import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './ClientItem.styles';

const ClientItem = ({item, navigation}) => {
  const {id, name, description} = item
  return (
    <TouchableOpacity style={styles.clientCardContainer} onPress={() => navigation.navigate('Perfil')} >
      <View>
        <View style={styles.imageView}></View>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClientItem;

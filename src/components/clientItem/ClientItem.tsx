import React from 'react';
import {Text, View} from 'react-native';
import styles from './ClientItem.styles';

const ClientItem = ({item}) => {
  const {id, name, description} = item
  return (
    <View style={styles.clientCardContainer}>
      <View>
        <View style={styles.imageView}></View>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
};

export default ClientItem;

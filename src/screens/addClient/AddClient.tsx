import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/Button/Button';
import CustomTextInput from '../../components/TextInput/CustomTextInput';
import styles from './AddClient.styles';

const AddClient = ({navigation}) => {
  return (
    <View>
        <View style={styles.headerContainer}>
            <Text>Agrega un nuevo miembro</Text>
        </View>
      <View>
        <CustomTextInput placeholder="Nombres" />
        <CustomTextInput placeholder="Apellidos" />
        <CustomTextInput placeholder="Email" />
        <Button title="Agregar" onPress={() => navigation.navigate("Homi")}/>
      </View>
    </View>
  );
};

export default AddClient;

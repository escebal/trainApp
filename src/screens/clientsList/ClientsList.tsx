import React from 'react';
import {FlatList, InteractionManager, Text, View} from 'react-native';
import AddClientButton from '../../components/AddClientButton/AddClientButton';
import ClientItem from '../../components/clientItem/ClientItem';
import styles from './ClientsList.styles';

const ClientsList = ({navigation}) => {
  const data = [
    {
      id: '001',
      name: 'susana',
      description: 'una descripcion',
    },
    {
      id: '002',
      name: 'Carmen',
      description: 'una descripcion',
    },
  ];

  return (
    <View style={styles.clientsListContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ClientItem item={item}  navigation={navigation}/>}
        ListHeaderComponent={<Text>Lista de clientes</Text>}
        ItemSeparatorComponent={<View style={styles.separator}></View>}
       
      />
      <View style={styles.addClientContainer}>
        <AddClientButton navigation={navigation} />
      </View>
    </View>
  );
};

export default ClientsList;

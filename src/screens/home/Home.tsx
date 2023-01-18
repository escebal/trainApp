import React from 'react';
import {Text, View} from 'react-native';
import styles from './Home.styles';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <View>
        <Text>Welcome back nombre del entrenador</Text>
      </View>
      <View>
        <Text>
          Aca van los entrenamientos que tiene el entrenador durante el dia
        </Text>
      </View>
    </View>
  );
};

export default Home;

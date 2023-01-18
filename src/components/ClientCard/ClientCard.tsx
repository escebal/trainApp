import React from 'react'
import { Text, View } from 'react-native'
import styles from './ClientCard.styles'

const ClientCard = () => {
  return (
    <View style={styles.clientCardContainer} >
        <View>
            <View style={styles.imageView} ></View>
        </View>
        <View style={styles.dataContainer} >
            <Text style={styles.nameText} >Nombre de la persona</Text>
            <Text style={styles.descriptionText} >No se que poner aca</Text>
        </View>
    </View>
  )
}

export default ClientCard

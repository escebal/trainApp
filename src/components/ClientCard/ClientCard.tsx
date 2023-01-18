import React from 'react'
import { Text, View } from 'react-native'
import styles from './ClientCard.styles'

const ClientCard = () => {
  return (
    <View style={styles.clientCardContainer} >
        <View>
            <Text>Aca va una imagen</Text>
        </View>
        <View>
            <Text>Nombre de la persona</Text>
            <Text>No se que poner aca</Text>
        </View>
    </View>
  )
}

export default ClientCard

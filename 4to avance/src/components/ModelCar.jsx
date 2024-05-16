import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import models from '../data/Models.json'
import { colors } from '../constants/colors'

const ModelCar = ({model}) => {
  return (
    <Card style={styles.modelCarStyles}>
      <Text style={styles.modelCarText}>{model.model}</Text>
      <Image
      resizeMode='cover'
      style = {styles.image}
      source={{uri: model.image}}
      />
    </Card>
  )
}

export default ModelCar

const styles = StyleSheet.create({
    image: {
        height: "85%",
        width: "95%",
        borderRadius: 8,
      },
    modelCarStyles: {
        justifyContent: 'center',

    },
    modelCarText: {
        color: colors.W
    }
})
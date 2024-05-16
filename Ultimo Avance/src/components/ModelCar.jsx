import { StyleSheet, Image, Text, Pressable } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import models from '../data/Models.json'
import { colors } from '../constants/colors'

const ModelCar = ({
  model,
  setItemIdSelected = () => {}
}) => {
  
  
  return (
    <Card style={styles.modelCarStyles}>
      <Pressable style={styles.sPresseable} onPress={()=>
        setItemIdSelected(model.id)}>
        <Text style={styles.modelCarText}>{model.model}</Text>
        <Image
          resizeMode='cover'
          style = {styles.image}
          source={{uri: model.image}}
        />
      </Pressable>
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
        color: colors.W,
        fontSize: 15
    },
    sPresseable: {
      width: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 0,
    }
})
import { StyleSheet, Image, Text, View, Button, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from "react"
import Models from '../data/Models.json'
import { colors } from '../constants/colors'

const ModelTech = ({ idSelected, setModelSelected }) => {

    const [model, setModel] = useState(null)


      useEffect(() => {
        const modelSelected = Models.find(
          (model) => model.id === idSelected
        )
        setModel(modelSelected)
      }, [idSelected])

  return (
    <View>
      <Button color={colors.Q} onPress={() => setModelSelected("")} title="Volver" />
      {model ? (
        <View
          style={styles.mainContainer}
        >
          <Text style={styles.modelName}>{model.model}</Text>
          <Image
            source={{ uri: model.image}}
            style={ styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.desc}>{model.description}</Text>
            <Text style={styles.price}>El valor de alquiler diario es de: {model.daily_rental_price} Dolares</Text>
            
          </View>
          <Button color={colors.B} title="Guarda tu reserva aquí"></Button>
        </View>
      ) : null}
    </View>
  )
}

export default ModelTech

const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      backgroundColor: colors.Q,
    },
    image: {
      width: '100%',
      height: 250,
    },
    textContainer: {
      flexDirection: "column",
    },
    price: {
      textAlign: "center",
      fontSize: 20,
      marginTop: 10
    },
    modelName:{
      backgroundColor: colors.Q,
      fontSize: 25,
      marginBottom: 10
    },
    desc: {
      textAlign: "left",
      marginTop: 10,
      fontSize: 15
    }

  })
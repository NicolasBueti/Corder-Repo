import { StyleSheet, Image, Text, View, Button, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from "react"
import Models from '../data/Models.json'
import { colors } from '../constants/colors'

const ModelTech = ({ idSelected, setModelSelected }) => {
    console.log(idSelected)

    const [model, setModel] = useState(null)
    const [orientation, setOrientation] = useState("portrait")
    const { width, height } = useWindowDimensions()

    useEffect(() => {
        if (width > height) setOrientation("landscape")
        else setOrientation("portrait")
      }, [width, height])

      console.log(orientation)

      useEffect(() => {
        const modelSelected = Models.find(
          (model) => model.id === idSelected
        )
        setModel(modelSelected)
      }, [idSelected])
    
      console.log(model)

  return (
    <View>
      <Button color={colors.Q} onPress={() => setModelSelected("")} title="Volver" />
      {model ? (
        <View
          style={
            orientation === "portrait"?
            styles.mainContainer
            : styles.mainContainerLandscape
          }
        >
          <Image
            source={{ uri: model.image}}
            style={orientation === "portrait" ? styles.image : styles.imageLandscape}
            resizeMode="cover"
          />
          <View style={orientation === "portrait" ? styles.textContainer : styles.textContainerLandscape}>
            <Text>{model.model}</Text>
            <Text>{model.description}</Text>
            <Text style={styles.price}>{model.daily_rental_price} Dolares</Text>
            
          </View>
          <Button title="Guardar Reserva"></Button>
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
      alignItems: "flex-start",
      padding: 10,
      backgroundColor: colors.Q
    },
    mainContainerLandscape: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 10,
      gap: 10,
    },
    image: {
      width: '100%',
      height: 250,
    },
    imageLandscape: {
      width: '45%',
      height: 200
    },
    textContainer: {
      flexDirection: "column",
    },
  
    textContainerLandscape: {
      width: '50%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      gap: 10,
    },
    price: {
      textAlign: 'right',
      width: '100%'
    }
  })
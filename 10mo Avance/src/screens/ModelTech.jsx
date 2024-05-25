import { StyleSheet, Image, Text, View, Button, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from "react"
import Models from '../data/Models.json'
import { colors } from '../constants/colors'

const ModelTech = ({ route, navigation, setModelSelected }) => {

    const [model, setModel] = useState(null)


      useEffect(() => {
        const modelSelected = Models.find(
          (model) => model.id === idSelected
        )
        setModel(modelSelected)
      }, [idSelected])

      console.log(route);

      const{modelId: idSelected} = route.params

  return (
    <View style={styles.viewStyle}>
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
            <Text style={styles.desc}> * {model.transmission}</Text>
            <Text style={styles.desc}> * {model.engine}</Text>
            <Text style={styles.desc}> * {model.air_conditioning}</Text>
            <Text style={styles.price}>El valor de alquiler diario es de: {model.daily_rental_price} Dolares</Text>
            
          </View>
          <Button color={colors.B} title="Guarda tu reserva aquí"></Button>
        </View>
      ) : null}
      <Text style={styles.buttonBack} onPress={() => navigation.goBack()}>Volver</Text>
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
      width: "100%",
      backgroundColor: colors.MLG,
      fontSize: 25,
      textAlign: "center",
      color: colors.Q,
      marginBottom: 10
    },
    desc: {
      textAlign: "left",
      marginTop: 10,
      fontSize: 15
    },
    viewStyle: {
      flex: 1,
      backgroundColor: colors.Q
    },
    buttonBack: {
      backgroundColor: colors.BI,
      fontSize: 25,
      textAlign: "center",
      color: colors.Q,
    }

  })
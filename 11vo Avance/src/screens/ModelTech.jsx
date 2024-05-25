import { StyleSheet, Image, Text, View, Button, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from "react"
import Models from '../data/Models.json'
import { colors } from '../constants/colors'
import { useGetModelsByIdQuery } from '../services/reservationService'
import { useDispatch } from 'react-redux'
import { addReservation } from '../features/PendingReservations/pendingReservationsSlice'

const ModelTech = ({ route, navigation }) => {

  const dispatch = useDispatch()

  const{modelId: idSelected} = route.params
  const {data: model, error, isLoading} = useGetModelsByIdQuery(idSelected)

  const handleAddReservation = () => {
    dispatch(addReservation({...model, quantity: 1}))
  }

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
          
          <Text style={styles.desc}>{model.description}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.descModel}> * Caja {model.transmission}</Text>
            <Text style={styles.descModel}> * Capacidad: {model.doors} Pasajeros</Text>
            <Text style={styles.descModel}> * {model.air_conditioning}</Text>
            <Text style={styles.price}>El valor de alquiler diario es de: {model.daily_rental_price} Dolares</Text>
            
          </View>
        </View>
      ) : null}
      <Button color={colors.B} title="Guarda tu reserva aquí" onPress={handleAddReservation}></Button>
      <Text style={styles.buttonBack} onPress={() => navigation.goBack()}>Toca aquí para volver</Text>
    </View>
  )
}

export default ModelTech

const styles = StyleSheet.create({
    mainContainer: {
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
      fontFamily: "SedanSC",
      textAlign: "center",
      fontSize: 18,
      marginTop: 10,
      color: colors.Q,
      backgroundColor: colors.MLG,
      paddingHorizontal: "1%",
    },
    modelName:{
      width: "100%",
      backgroundColor: colors.MLG,
      fontSize: 30,
      textAlign: "center",
      color: colors.Q,
      marginBottom: 10,
      fontFamily: "SedanSC"
    },
    desc: {
      fontFamily: "SedanSC",
      marginTop: 10,
      fontSize: 16
    },
    descModel: {
      marginHorizontal: "5%",
      fontFamily: "SedanSC",
      textAlign: "left",
      marginTop: 10,
      fontSize: 15
    },
    viewStyle: {
      flex: 1,
      backgroundColor: colors.Q,
      gap: 10,
    },
    buttonBack: {
      marginTop: 30,
      backgroundColor: colors.MG,
      fontSize: 25,
      textAlign: "center",
      color: colors.Q,
    }

  })
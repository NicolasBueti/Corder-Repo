import { StyleSheet, Image, Text, View, Button, ScrollView, SafeAreaView, TextInput, Alert } from 'react-native'
import React, { useState } from "react"
import { colors } from '../constants/colors'
import { useGetModelsByIdQuery } from '../services/reservationService'
import { useDispatch } from 'react-redux'
import { addReservation } from '../features/PendingReservations/pendingReservationsSlice'

const ModelTech = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const { modelId: idSelected } = route.params
  const { data: model, error, isLoading } = useGetModelsByIdQuery(idSelected)
  const [days, setDays] = useState('')

  const handleAddReservation = () => {
    const quantity = parseInt(days, 10)
    if (!isNaN(quantity) && quantity > 0) {
      dispatch(addReservation({ ...model, quantity }))
      setDays('')
      Alert.alert("Reserva guardada", "Tu reserva ha sido guardada exitosamente")
    } else {
      alert("Por favor, ingresa un número válido de días.")
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.viewStyle}>
          {model ? (
            <View style={styles.mainContainer}>
              <Text style={styles.modelName}>{model.model}</Text>
              <Image
                source={{ uri: model.image }}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.desc}>{model.description}</Text>
              <View style={styles.textContainer}>
                <Text style={styles.descModel}>* Transmisión: {model.transmission}</Text>
                <Text style={styles.descModel}>* Capacidad: {model.doors} Pasajeros</Text>
                <Text style={styles.descModel}>* {model.air_conditioning}</Text>
                <Text style={styles.price}>El valor de alquiler diario es de: ${model.daily_rental_price} Dólares</Text>
              </View>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Cantidad de días"
                value={days}
                onChangeText={setDays}
              />
            </View>
          ) : null}
          <Button color={colors.B} title="Guarda tu reserva aquí" onPress={handleAddReservation} />
          <Text style={styles.buttonBack} onPress={() => navigation.goBack()}>Volver</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ModelTech

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.Q,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
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
    fontSize: 16,
    marginTop: 10,
    color: colors.Q,
    backgroundColor: colors.MLG,
    paddingHorizontal: "1%",
  },
  modelName: {
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
    backgroundColor: colors.Q,
    gap: 10,
  },
  buttonBack: {
    alignSelf: "center",
    width: "80%",
    borderWidth: 1,
    backgroundColor: colors.MLG,
    color: colors.Q,
    textAlign: "center",
    padding: 8,
    fontFamily: "SedanSC",
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: colors.MLG,
    borderWidth: 1,
    marginVertical: 20,
    paddingHorizontal: 10,
    width: '80%',
    alignSelf: 'center',
    fontFamily: "SedanSC",
  }
})

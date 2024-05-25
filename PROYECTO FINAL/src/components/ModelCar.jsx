import { StyleSheet, Image, Text, Pressable } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import { colors } from '../constants/colors'
import { useDispatch } from 'react-redux'
import { setIdSelected } from '../features/Reservation/reservationSlice'

const ModelCar = ({
  model,
  navigation
}) => {

  const dispatch = useDispatch()
  const handleNavigate = () => {
    dispatch(setIdSelected(model.id))
    navigation.navigate('ModelTech',{modelId: model.id})

  }
  
  
  return (
    <Card style={styles.modelCarStyles}>
      <Pressable style={styles.sPresseable} onPress={handleNavigate}>
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
        fontSize: 15,
        fontFamily: "SedanSC",
    },
    sPresseable: {
      width: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    }
})
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../features/Reservation/reservationSlice'

const CategoryCar = ({category, navigation }) => {

  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setCategorySelected(category))
    navigation.navigate('ModelsCat',{category})
  }

  return (
    <Pressable onPress={handleNavigate}>
      <Card>
        <Text style={styles.textCategory}>{category}</Text>
      </Card>
    </Pressable>
  )
}

export default CategoryCar

const styles = StyleSheet.create({
    textCategory: {
        color: "white",
        fontFamily: "SedanSC",
        fontSize: 25
    }
}) 
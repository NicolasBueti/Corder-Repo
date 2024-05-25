import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../features/Reservation/reservationSlice'
import { colors } from '../constants/colors'

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
        color: colors.W,
        fontFamily: "SedanSC",
        fontSize: 25
    }
}) 
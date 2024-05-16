import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import Card from './Card'

const CategoryCar = ({category}) => {
  return (
    <Card>
      <Text style={styles.textCategory}>{category}</Text>
    </Card>
  )
}

export default CategoryCar

const styles = StyleSheet.create({
    textCategory: {
        color: "white"
    }
})
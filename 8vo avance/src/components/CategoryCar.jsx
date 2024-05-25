import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import Card from './Card'

const CategoryCar = ({category, navigation }) => {
  return (
    <Pressable onPress={()=>navigation.navigate('ModelsCat',{category})}>
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
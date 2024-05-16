import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import Card from './Card'

const CategoryCar = ({category, selectCategory = () => {} }) => {
  return (
    <Pressable onPress={()=>selectCategory(category)}>
      <View style={styles.container}>
        <Text style={styles.textCategory}>{category}</Text>
      </View>
    </Pressable>
  )
}

export default CategoryCar

const styles = StyleSheet.create({
    textCategory: {
        color: "white",
        fontFamily: "SedanSC",
        fontSize: 25
    },
    container: {
    backgroundColor: colors.MLG,
    width: "90",
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    padding: 5,
    margin: 50,
    }
})
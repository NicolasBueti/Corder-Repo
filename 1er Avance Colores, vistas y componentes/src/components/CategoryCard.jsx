import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import Card from '../components/Card'

const CategoryCard = ({category}) => {
  return (
    <Card>
      <Text style={styles.textCategory}>{category}</Text>
    </Card>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    categoryContainer: {
        backgroundColor: colors.Y,
        height: 40,
        width: 200,
        justifyContent: "center",
        alignItems:"center",
        marginBottom: "30%"

    },
    textCategory: {
        color: "white"
    }
})
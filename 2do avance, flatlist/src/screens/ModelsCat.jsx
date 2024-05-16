import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import Models from '../data/Models.json'
import ModelCar from '../components/ModelCar'


const ModelsCat = () => {
  return (
    <View style={styles.ModelsContainer}>
      <Text>Modelos por categoria</Text>
      <FlatList
      data = {Models}
      renderItem = {({item}) => <ModelCar model={item}/>}

  />
    </View>
  )
}

export default ModelsCat

const styles = StyleSheet.create({
  ModelsContainer: {
    flex: 1,
    marginTop: "10%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.LGA,
    flexDirection: 'column',
  }
})
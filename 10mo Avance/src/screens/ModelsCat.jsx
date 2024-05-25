import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../constants/colors'
import Models from '../data/Models.json'
import ModelCar from '../components/ModelCar'
import Search from '../components/Search'

const ModelsCat = ({
  setCategorySelected = () => {},
  route,
  navigation
}) => {
  const [keyword, setKeyword] = useState("")
  const [modelsFiltered, setModelsFiltered] = useState([])
  const [error, setError] = useState("")

  const {category: categorySelected} = route.params

  useEffect(()=> {

    const regexDigits = /\d/
    const hasDigits = regexDigits.test(keyword)

    if (hasDigits) {
      setError["No puede usar numeros"]
      return
    }
    const modelsPerCat = Models.filter(model => model.category === categorySelected)
    const modelsFilter = modelsPerCat.filter(model => model.model.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
    setModelsFiltered(modelsFilter)
    setError("")
  }, [keyword, categorySelected])

  return (
    <View style={styles.ModelsContainer}>
      <Text style={styles.CatText}>Modelos por categoria</Text>
      <Search
      error={error} 
      onSearch={setKeyword}
      setKeyword={()=> setKeyword("")}
      goBack={()=> navigation.goBack()}
       />
      <FlatList
      data = {modelsFiltered.sort()}
      renderItem = {({item}) => <ModelCar model={item} navigation={navigation}/>}
      keyExtractor = {(model) => model.id}
  />
    </View>
  )
}

export default ModelsCat

const styles = StyleSheet.create({
  ModelsContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.Q,
    flexDirection: 'column',
    gap: 10
  },
  CatText: {
    paddingTop: 10,
    fontFamily: "SedanSC",
  }
})
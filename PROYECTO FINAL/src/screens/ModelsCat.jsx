import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../constants/colors'
import ModelCar from '../components/ModelCar'
import Search from '../components/Search'
import { useGetModelsByCategoryQuery } from '../services/reservationService'

const ModelsCat = ({
  route,
  navigation
}) => {
  const [keyword, setKeyword] = useState("")
  const [modelsFiltered, setModelsFiltered] = useState([])
  const [error, setError] = useState("")

  const {category: categorySelected} = route.params

  const {data: ModelsFetched, error: errorFromFetch, isLoading} = useGetModelsByCategoryQuery(categorySelected)

  useEffect(()=> {
    if (!isLoading) {
    const modelsFilter = ModelsFetched.filter(model => model.model.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
    setModelsFiltered(modelsFilter)
    setError("")
    }
  }, [keyword, categorySelected, ModelsFetched])

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
      showsVerticalScrollIndicator={false}
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
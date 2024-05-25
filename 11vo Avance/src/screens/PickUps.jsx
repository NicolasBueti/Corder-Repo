import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderData from '../data/Orders.json'
import PickUpCard from '../components/PickUpCard'

const PickUpsScreen = () => {
  return (
    <View>
        <FlatList
            data={OrderData}
            keyExtractor={PickUpCard => PickUpCard.id}
            renderItem={({item}) => {
                return (
                    <PickUpCard 
                      pickup={item}
                    />
                )
            }}
        />
    </View>
  )
}

export default PickUpsScreen

const styles = StyleSheet.create({})
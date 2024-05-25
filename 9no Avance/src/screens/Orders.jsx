import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderData from '../data/Orders.json'
import OrderCard from '../components/OrderCard'

const OrderScreen = () => {
  return (
    <View>
        <FlatList
            data={OrderData}
            keyExtractor={OrderCard => OrderCard.id}
            renderItem={({item}) => {
                return (
                    <OrderCard 
                      order={item}
                    />
                )
            }}
        />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})
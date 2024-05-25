import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import ReservationsData from '../data/Reservations.json'
import ReservationsCard from '../components/ReservationCard'
import React from 'react'

const Reservations = () => {
    // console.log(CartData);
    const total = ReservationsData.reduce((acumulador, currentItem) => acumulador += currentItem.daily_rental_price * currentItem.quantity, 0)

    let total2 = 0
    for (const currentItem of ReservationsData) {
        console.log(currentItem.id);
        total2 += currentItem.daily_rental_price * currentItem.quantity
    }
    
    return (
    <View style={styles.container}>
        <FlatList
            data={ReservationsData}
            keyExtractor={Res => Res.id}
            renderItem={({item})=> {
                return (
                    <ReservationsCard
                        reservationsCard={item}
                    />
                )
            }}
        />
        <View style={styles.totalContainer}>
            <Pressable>
                <Text>
                    Confirm
                </Text>
            </Pressable>
            <Text>Total: ${total}</Text>
        </View>
    </View>
  )
}

export default Reservations

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        marginBottom: 120,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
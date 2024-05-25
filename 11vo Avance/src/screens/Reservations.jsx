import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import ReservationsCard from '../components/ReservationCard'
import React from 'react'
import { useSelector } from 'react-redux'

const Reservations = () => {
    // console.log(CartData);

    const {items: reservationsData, total} = useSelector (state => state.pendingReservationsSlice.value)

    
    return (
    <View style={styles.container}>
        <FlatList
            data={reservationsData}
            keyExtractor={Res => Res.id}
            renderItem={({item})=> {
                return <ReservationsCard reservationsCard={item} />
            }}
        />
        <View style={styles.totalContainer}>
            <Pressable onPress={() => {}}>
                <Text>Confirm</Text>
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
        marginBottom: 20,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
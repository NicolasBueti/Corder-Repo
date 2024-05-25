import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import ReservationsCard from '../components/ReservationCard'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { usePostReservationMutation } from '../services/reservationService'
import { colors } from '../constants/colors'
import { clearReservations } from '../features/PendingReservations/pendingReservationsSlice'
import { useNavigation } from '@react-navigation/native'

const Reservations = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const {localId} = useSelector(state => state.auth.value)
    const {items: reservationsData, total} = useSelector(state => state.pendingReservationsSlice.value)

    const [triggerPostReservation, result] = usePostReservationMutation()

    const onConfirmReservation = async () => {
        await triggerPostReservation({items: reservationsData, user: localId, total})
        dispatch(clearReservations()) 
        navigation.navigate('Pick Ups')
    }

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
                <Text style={styles.styleText}> Total: ${total} </Text>
                <Pressable onPress={onConfirmReservation}>
                    <Text style={styles.styleTextConfirm}> ¡Confirmar reservas! </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Reservations

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.Q,
    },
    totalContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        gap: 10
    },
    styleText: {
        backgroundColor: colors.MG,
        fontSize: 25,
        fontFamily: "SedanSC",
        color: colors.Q
    },
    styleTextConfirm: {
        margin: 10,
        backgroundColor: colors.MLG,
        fontSize: 25,
        fontFamily: "SedanSC",
        color: colors.Q,
    }
})

import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Reservations from "../screens/Reservations";

const Stack = createNativeStackNavigator()

const ReservationStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="ReservationScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ReservationScreen" component={Reservations} />

        </Stack.Navigator>
    );
};

export default ReservationStack;
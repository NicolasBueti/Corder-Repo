import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Reservations from "../screens/Reservations";

const Stack = createNativeStackNavigator()

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="CartScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="CartScreen" component={Reservations} />

        </Stack.Navigator>
    );
};

export default CartStack;
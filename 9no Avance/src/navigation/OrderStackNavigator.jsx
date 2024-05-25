import React from "react"
import OrderScreen from "../screens/Orders"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Orders from "../screens/Orders"

const Stack = createNativeStackNavigator()

const OrderStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="OrderScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="OrderScreen" component={Orders} />
        </Stack.Navigator>
    )
}

export default OrderStack

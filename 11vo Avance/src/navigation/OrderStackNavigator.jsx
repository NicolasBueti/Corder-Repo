import React from "react"
import OrderScreen from "../screens/PickUps"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Orders from "../screens/PickUps"
import PickUpsScreen from "../screens/PickUps"

const Stack = createNativeStackNavigator()

const PickUpsStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Pick Ups"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Pick Ups" component={PickUpsScreen} />
        </Stack.Navigator>
    )
}

export default PickUpsStack

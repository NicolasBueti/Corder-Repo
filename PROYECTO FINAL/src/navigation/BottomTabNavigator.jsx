import React from "react"
import { StyleSheet, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStackNavigator from "./HomeStackNavigator"
import { colors } from "../constants/colors"
import Header from "../components/Header"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Ionicons } from "@expo/vector-icons"
import ReservationStack from "./CartStackNavigator"
import PickUpsStack from "./OrderStackNavigator"
import MyProfileStackNavigator from "./MyProfileStackNavigator"

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                header: () => {
                    return <Header route={route} />
                },
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            })}
        >
            <Tab.Screen
                name="¡elegi tu vehiculo!"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons
                                    name="car-sport"
                                    size={28}
                                    color={focused ? colors.LGA : "black"}
                                />
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="¡tus reservas!"
                component={ReservationStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialIcons
                                    name="car-rental"
                                    size={28}
                                    color={focused ? colors.LGA : "black"}
                                />
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen 
                name="¡tus retiros pendientes!"
                component={PickUpsStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialCommunityIcons name="car-clock" size={24} color={ focused ? colors.LGA : "black" } />
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen 
                name="mi perfil"
                component={MyProfileStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons name="person-circle" size={24} color={ focused ? colors.LGA : "black" }  />
                            </View>
                        )
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.MG,
        shadowColor: "black",
        borderRadius: 15,
        height: "10%",
    },
})

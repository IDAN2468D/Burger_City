import React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome5, MaterialCommunityIcons } from 'react-native-vector-icons'
import HomeStack from './HomeStack';
import BurgersStack from './BurgersStack';
import FavouritesStack from "./FavouritesStack";
import TrackOrdersStack from './TrackOrdersStack';
import WalletStack from './WalletStack';


const TabNavigator = ({ params }) => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="HomeStack" tabBarOptions={{ activeTintColor: '#FFA500', labelStyle: { fontSize: 12 } }}  >
            <Tab.Screen name="Home" component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo
                            name="home"
                            color={color}
                            size={size}
                        />
                    )
                }} />
            <Tab.Screen name="Burgers" component={BurgersStack}
                options={{
                    tabBarLabel: "Burgers",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="hamburger"
                            color={color}
                            size={size}
                        />
                    )
                }} />
            <Tab.Screen name="Favourites" component={FavouritesStack}
                options={{
                    tabBarLabel: "Favourites",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="star"
                            color={color}
                            size={size}
                        />
                    )
                }} />
            <Tab.Screen name="TrackOrders" component={TrackOrdersStack}
                options={{
                    tabBarLabel: "TrackOrders",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="truck-delivery"
                            color={color}
                            size={size}
                        />
                    )
                }} />
            <Tab.Screen name="Wallet" component={WalletStack}
                options={{
                    tabBarLabel: "Wallet",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="wallet"
                            color={color}
                            size={size}
                        />
                    )
                }} />
        </Tab.Navigator>
    );
}
export default TabNavigator;

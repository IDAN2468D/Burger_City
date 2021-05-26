import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/home/Index';
import HeaderTitle from '../components/HeaderTitle';

const HomeStack = ({ params }) => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    headerTitle: props => <HeaderTitle />,
                    headerTitleAlign: "center"
                }}
            />
        </Stack.Navigator>

    );
}

export default HomeStack;

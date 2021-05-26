import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FavouritesScreen from '../screen/favourites/Index';
import HeaderTitle from '../components/HeaderTitle';

const FavouritesStack = ({ params }) => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Favourites" component={FavouritesScreen}
                options={{
                    headerTitle: props => <HeaderTitle />,
                    headerTitleAlign: "center"
                }}
            />
        </Stack.Navigator>

    );
}

export default FavouritesStack;

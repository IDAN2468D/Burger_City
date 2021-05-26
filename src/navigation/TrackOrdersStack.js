import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TrackOrdersScreen from '../screen/track/Index';
import HeaderTitle from '../components/HeaderTitle';

const TrackOrdersStack = ({ params }) => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="TrackOrders" component={TrackOrdersScreen}
                options={{
                    headerTitle: props => <HeaderTitle />,
                    headerTitleAlign: "center"
                }}
            />
        </Stack.Navigator>

    );
}

export default TrackOrdersStack;

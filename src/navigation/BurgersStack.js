import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OrderMethodScreen from '../screen/burgers/OrderMethod';
import HeaderTitle from '../components/HeaderTitle';
import DeliveryAddressScreen from '../screen/burgers/DeliveryAddress';
import MenuScreen from '../screen/burgers/Menu';

const BurgersStack = ({ params }) => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="OrderMethodScreen">
            <Stack.Screen name="OrderMethodScreen" component={OrderMethodScreen}
                options={{
                    headerTitle: props => <HeaderTitle />,
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen name="DeliveryAddressScreen" component={DeliveryAddressScreen}
                options={{
                    headerTitle: props => <HeaderTitle />,
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen name="MenuScreen" component={MenuScreen}
                options={{
                    headerTitle: props => <HeaderTitle />,
                    headerTitleAlign: "center"
                }}
            />
        </Stack.Navigator>

    );
}

export default BurgersStack;

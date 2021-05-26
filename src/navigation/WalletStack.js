import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PaymentScreen from '../screen/wallet/Payment';
import ConfirmedScreen from '../screen/wallet/Confirmed';
import SuccessScreen from '../screen/wallet/Success';
import HeaderTitle from '../components/HeaderTitle';

const WalletStack = ({ params }) => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Payment">
            <Stack.Screen name="Payment" component={PaymentScreen}
                options={{
                    headerTitle: props => <HeaderTitle />,
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen name="Confirmed" component={ConfirmedScreen}
                options={{
                    headerTitle: props => <HeaderTitle />,
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen name="Success" component={SuccessScreen}

                options={{
                    headerTitle: props => <HeaderTitle />,
                    headerTitleAlign: "center"
                }} />
        </Stack.Navigator>

    );
}

export default WalletStack;

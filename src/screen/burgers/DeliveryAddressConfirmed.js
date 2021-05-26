import React, { useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import Cell from '../../components/Cell';
import Title from '../../components/Title';
import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import GroupButton from '../../components/GroupButton';
import Button from '../../components/Button';

const addressSample = [
    {
        id: 1,
        name: "No. 02, 6Th Lane, Colombo 03",
        icon: require("../../../assets/image/icons_png/edit.png"),
    }
]
const dateTimeSample = [
    {
        id: 1,
        name: "22/02/2021 11:01:02",
        icon: require("../../../assets/image/icons_png/calander.png"),
    }
]

const DeliveryAddressConfirmed = ({ navigation, route }) => {

    const [data, setData] = useState(addressSample);
    const [dateTime, setDateTime] = useState(dateTimeSample);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate("Wallet") }} />),
            headerLeft: () => (<HeaderBack onPress={() => { navigation.goBack() }} />)
        })
    })


    const _renderItem = (item, index) => {
        return (
            <Text
                key={item.id}
                style={{
                    fontFamily: "Nunito-SemiBold",
                    fontSize: 15,
                    lineHeight: 20,
                }}>
                {item.name}
            </Text>
        )
    }


    const _onItemClick = (item, index) => {
        let temp = [];
        data.map((entry, idx) => {
            if (idx === index) {
                entry.selected = true;
                temp.push(entry);
            } else {
                entry.selected = false;
                temp.push(entry)
            }
        });
        setData(temp);
    }


    const buttons = [
        {
            activated: false,
            text: "Order Now",
            onPress: () => { navigation.push("DeliveryAddressScreen") },
        },
        {
            activated: true,
            text: "Order in Advance",
            onPress: () => { Alert.alert("Order in Advance") },
        }
    ]

    return (
        <Background >
            <View style={styles.container}>
                <Title subTitle="To proceed, please cofirm your delivery details" />
                <GroupButton activeColor="#FF9F1C" buttons={buttons}></GroupButton>
                <Title title="Delivery Address"></Title>
                <Cell data={data} renderItem={_renderItem} onPress={() => Alert.alert("Go to change Address Screen")}></Cell>
                <View style={{ marginTop: 10 }}>
                    <Button text="Change Address" onPress={() => { Alert.alert("Go to Change Address") }} />
                </View>
                <Title title="Delivery Date Time" subTitle="Please select delivery Date & Time"></Title>
                <Cell data={dateTime} renderItem={_renderItem} onPress={() => Alert.alert("Go to change Address Screen")}></Cell>
                <View style={{ marginTop: 10 }}>
                    <Button text="Proceed to Order" onPress={() => { }} />
                </View>
            </View>
        </Background>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})

export default DeliveryAddressConfirmed;

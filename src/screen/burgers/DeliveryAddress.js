import React, { useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import Cell from '../../components/Cell';
import Title from '../../components/Title';
import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import GroupButton from '../../components/GroupButton';
import Button from '../../components/Button';

const address = [
    {
        id: 1,
        name: "No. 02, 6Th Lane, Colombo 03",
        icon: require("../../../assets/image/icons_png/edit.png"),
    }
]

const DeliveryAddress = ({ navigation, route }) => {


    const [data, setData] = useState(address);

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
            activated: true,
            text: "Order Now",
            onPress: () => { Alert.alert("Order Now") },
        },
        {
            activated: false,
            text: "Order in Advance",
            onPress: () => { navigation.push("DeliveryAddressConfirmedScreen") },
        }
    ]

    return (
        <Background >
            <View style={styles.container}>
                <Title subTitle="To proceed, please cofirm your delivery details" />
                <GroupButton activeColor="#FF9F1C" buttons={buttons}></GroupButton>
                <Title title="Delivery Address"></Title>
                <Cell data={data} renderItem={_renderItem} onPress={() => Alert.alert("Go to change Address Screen")}></Cell>
                <View style={{ marginTop: 210 }}>
                    <Button text="Proceed to Order (Now)" onPress={() => { navigation.push("MenuScreen") }} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button text="Change Address" onPress={() => { Alert.alert("Go to Change Address") }} />
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

export default DeliveryAddress;

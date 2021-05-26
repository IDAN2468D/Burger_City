import React, { useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import Cell from '../../components/Cell';
import Title from '../../components/Title';
import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import Button from '../../components/Button';


const methods = [
    {
        id: 1,
        name: "In-Store",
        selected: false,
        icon: require("../../../assets/image/icons_png/tick.png"),
        activeIcon: require("../../../assets/image/icons_png/tick-active.png")

    },
    {
        id: 2,
        name: "Delivery",
        selected: true,
        icon: require("../../../assets/image/icons_png/tick.png"),
        activeIcon: require("../../../assets/image/icons_png/tick-active.png")

    },
    {
        id: 3,
        name: "Drive Thru",
        selected: false,
        icon: require("../../../assets/image/icons_png/tick.png"),
        activeIcon: require("../../../assets/image/icons_png/tick-active.png")
    }
]

const OrderMethod = ({ navigation, route }) => {


    const [data, setData] = useState(methods);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate("Wallet") }} />),
            headerLeft: () => (<HeaderBack onPress={() => { navigation.navigate("Home") }} />)
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

    return (
        <Background >
            <View style={styles.container}>
                <Title
                    title="Order Method"
                    subTitle="Please select your order method"
                />
                <View style={{ marginTop: 20 }}>
                    <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
                </View>
                <View style={{ marginTop: 243 }}>
                    <Button text="Proceed to Order" onPress={() => navigation.push("DeliveryAddressScreen")} />
                </View>
            </View>
        </Background>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default OrderMethod;

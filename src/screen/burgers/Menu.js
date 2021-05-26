import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import Title from '../../components/Title';

const Menu = ({ navigation, route }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate("Wallet") }} />),
            headerLeft: () => (<HeaderBack onPress={() => { navigation.goBack() }} />)
        })
    })

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.addressView}>
                    <Title
                        title="Delivery Address"
                        subTitle="No. 02, 6Th Lane, Colombo 03"
                        titleColor="#FFFFFF"
                        subTitleColor="#FF9F1C"
                    ></Title>
                </View>
                <View style={styles.dateTimeView}>
                    <Title
                        title="Delivery Date & Time"
                        subTitle="19/02/2021 03:26:00 PH"
                        titleColor="#FFFFFF"
                        subTitleColor="#FF9F1C"
                    ></Title>
                </View>
            </View>
        </Background>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addressView: {
        height: 115,
        backgroundColor: "#1C272E",
    },
    dateTimeView: {
        height: 85,
        backgroundColor: "#1C272E"
    }
})

export default Menu;

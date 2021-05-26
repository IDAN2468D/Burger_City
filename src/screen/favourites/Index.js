import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';


const HomeScreen = ({ navigation, route }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate("Wallet") }} />),
            headerLeft: () => (<HeaderBack onPress={() => { navigation.navigate("Home") }} />)
        })
    })

    return (
        <View style={styles.container}>
            <View style={{ width: 250, height: 100, backgroundColor: "#000000", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#FF9F1C", fontSize: 22 }}>Favourites Screen</Text>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default HomeScreen;

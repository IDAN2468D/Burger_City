import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomeScreen = ({ params }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: 250, height: 100, backgroundColor: "#000000", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#FF9F1C", fontSize: 22 }}>Wallet Screen</Text>
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

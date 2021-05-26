import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({
    text, onPress, ...params
}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        backgroundColor: "#FF9F1C",
        marginLeft: 30
    },
    text: {
        fontFamily: "CircularStd-Bold",
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600"
    },

})

export default Button;

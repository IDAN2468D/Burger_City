import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Title = ({
    title, subTitle,
}) => (
    <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subtitleText}>{subTitle}</Text>
    </View>
);

const styles = StyleSheet.create({
    title: {
        marginLeft: 20,
        marginTop: 28,
    },
    titleText: {
        fontFamily: "Nunito-Bold",
        color: "#000000",
        fontSize: 20,
        lineHeight: 27
    },
    subtitleText: {
        fontFamily: "Nunito-SemiBold",
        color: "#000000",
        fontSize: 15,
        lineHeight: 20
    }
})

export default Title;

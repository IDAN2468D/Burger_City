import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Cell = ({
    style, data, renderItem, onPress
}) => {
    return data ? (
        data.map((entry, index) => {
            return (
                <TouchableOpacity key={index} style={styles.container} onPress={() => onPress(entry, index)}>
                    <View style={styles.leftView}>
                        {renderItem(entry, index)}
                    </View>
                    <View style={styles.rightView}>
                        <Image source={entry.selected ? entry.activeIcon : entry.icon} />
                    </View>
                </TouchableOpacity>
            )
        })

    ) : (
        <View />
    )
};


const styles = StyleSheet.create({
    container: {
        height: 52,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 14,
        marginBottom: 14,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        borderRadius: 10,
    },
    leftView: {
        marginLeft: 20,
    },
    rightView: {
        marginRight: 20,
    }
})

export default Cell;

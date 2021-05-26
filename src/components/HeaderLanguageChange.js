import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';


const HeaderLanguageChange = ({
    onPress, ...params
}) => (
    <TouchableOpacity
        style={{
            marginLeft: 15,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }}
        onPress={onPress}
    >
        <Text style={{ color: "#FF9F1C", fontSize: 18, fontFamily: "Poppins-Bold" }}>EN</Text>
        <Image style={{ marginLeft: 3 }} source={require("../../assets/image/icons_png/drop-down.png")} />
    </TouchableOpacity>
);

export default HeaderLanguageChange;

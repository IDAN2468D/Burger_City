import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
//import AntDesign from 'react-native-vector-icons';


const HeaderRight = ({
    onPress, ...params
}) => (
    <TouchableOpacity style={{ marginRight: 20 }} onPress={onPress}>
        <Image source={require("../../assets/image/icons_png/Cart.png")} />
    </TouchableOpacity>
);

export default HeaderRight;

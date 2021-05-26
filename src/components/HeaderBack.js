import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

const HeaderBack = ({
    onPress,
}) => (
    <TouchableOpacity style={{ marginLeft: 15 }} onPress={onPress}>
        <Image source={require("../../assets/image/icons_png/back.png")} />
    </TouchableOpacity>
);

export default HeaderBack;

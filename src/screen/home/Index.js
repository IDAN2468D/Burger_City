import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Alert, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Coupon from '../../components/Coupon';
import Carousel from 'react-native-snap-carousel';

import HeaderRight from '../../components/HeaderRight';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';

const { width, height } = Dimensions.get("window");


const HomeScreen = ({ navigation, route }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate("Wallet") }} />),
            headerLeft: () => (<HeaderLanguageChange onPress={() => { Alert.alert("Home") }} />)
        })
    })

    const slides = [
        { id: 1, image: require("../../../assets/image/slides_image/image_1.jpg") },
        { id: 2, image: require("../../../assets/image/slides_image/image_2.jpg") },
        { id: 3, image: require("../../../assets/image/slides_image/image_3.jpg") },
        { id: 4, image: require("../../../assets/image/slides_image/image_4.jpg") }
    ];

    const coupons = [
        {
            id: 1,
            icon: require("../../../assets/image/logo.png"),
            title: "Order Here",
            desc: "Login to continue Burger Ciy",
        },
        {
            id: 2,
            icon: require("../../../assets/image/logo.png"),
            title: "Track Here",
            desc: "Login to continue Burger Ciy",
        },
    ];


    const offers = [
        { id: 1, image: require("../../../assets/image/Carousel/image.png") },
        { id: 2, image: require("../../../assets/image/Carousel/image-1.png") },
        { id: 3, image: require("../../../assets/image/Carousel/image-2.png") },
        { id: 4, image: require("../../../assets/image/Carousel/image.png") },
        { id: 5, image: require("../../../assets/image/Carousel/image-1.png") },
        { id: 6, image: require("../../../assets/image/Carousel/image-2.png") },
        { id: 7, image: require("../../../assets/image/Carousel/image.png") },
        { id: 8, image: require("../../../assets/image/Carousel/image-1.png") },
        { id: 9, image: require("../../../assets/image/Carousel/image-2.png") },
    ];

    const _renderItem = ({ item, index }) => {
        return (
            <View key={item.id}>
                <Image source={item.image} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ width: width, height: 241 }}>
                <Swiper
                    autoplay={true}
                    dot={<View style={styles.dot} />}
                    activeDot={<View style={styles.activeDot} />}
                >
                    {slides.map((slide, index) => {
                        return (
                            <View style={styles.slide} key={index}>
                                <Image source={slide.image} style={styles.image} />
                                <View style={styles.slide_text_wrapper}>
                                    <Text style={styles.slide_text}>World's Greatest Burgers</Text>
                                </View>
                            </View>
                        )
                    })}
                </Swiper>
            </View>
            <View style={{ marginTop: 10 }}>
                {
                    coupons.map((coupon) => {
                        return (
                            <Coupon key={coupon.id} icon={coupon.icon} title={coupon.title} dese={coupon.desc} />
                        )
                    })
                }
            </View>
            <View style={{ marginTop: 22, marginLeft: 20 }}>
                <Text style={{ fontFamily: "Nunito-ExtraBold", fontSize: 20 }}>Best Offerss</Text>
                <Carousel data={offers} renderItem={_renderItem} sliderWidth={width} itemWidth={140}></Carousel>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F7",
    },
    image: {
        width: width,
        height: 241,
    },
    slide: {
        width: width,
        height: 241,
    },
    slide_text_wrapper: {
        position: "relative",
        bottom: 215,
        right: -20,
        width: width - 100,
    },
    slide_text: {
        color: "#FFFFFF",
        fontFamily: "Nunito-ExtraBold",
        fontSize: 28,
    },
    dot: {
        backgroundColor: "rgba(255,255,255,0.3)",
        width: 8,
        height: 8,
        borderRadius: 8,
        marginLeft: 3,
        marginRight: 3,
    },
    activeDot: {
        backgroundColor: "#FFFFFF",
        width: 8,
        height: 8,
        borderRadius: 8,
        marginLeft: 3,
        marginRight: 3,
    },
})

export default HomeScreen;

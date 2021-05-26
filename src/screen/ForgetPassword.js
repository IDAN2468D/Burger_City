import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';


const { width, height } = Dimensions.get("window");
const title = "Forgot Password";
const tip = "Please enter a new password and confirm the password";

const Login = ({ params }) => (
    <View style={styles.container}>
        <ImageBackground
            source={require("../../assets/image/Onboarding/background-image.png")}
            style={{ width: width, height: height, }}
        >
            <View style={styles.darkLayer}></View>
            <View style={styles.logo}>
                <Image source={require("../../assets/image/logo.png")} />
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.tip}>
                <Text style={styles.tipText}>{tip}</Text>
            </View>
            <View style={styles.input}>
                <Input icon={require("../../assets/image/icons_png/lock-icon.png")} placeholder="New password" password />
                <View style={{ marginTop: 18 }} />
                <Input icon={require("../../assets/image/icons_png/lock-icon.png")} placeholder="Confirm password" password />
            </View>
            <View style={{ marginTop: 37, justifyContent: "center", alignItems: "center" }}>
                <Button text="Submit" />
            </View>

        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    darkLayer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "#000000",
        opacity: 0.4,
    },
    logo: {
        margin: 85,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        margin: 59,
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        color: "#FFFFFF",
        fontFamily: "Nunito-ExtraBold",
        fontSize: 30,
    },
    tip: {
        marginLeft: 70,
        marginRight: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    tipText: {
        color: "#FFFFFF",
        fontFamily: "Nunito-SemiBold",
        fontSize: 20,
        textAlign: "center",
    },
    input: {
        marginTop: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    Remember: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: 0.8,
    },
    RememberText: {
        color: "#FFFFFF",
        fontFamily: "Nunito-SemiBold",
        fontSize: 14,
    },
    forgotText: {
        color: "#FFFFFF",
        fontFamily: "Nunito-SemiBold",
        fontSize: 14,
    },
    signup: {
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    signupText: {
        color: "#FF9F1C",
        fontFamily: "Nunito-SemiBold",
        fontSize: 20
    },
    terms: {
        marginTop: 20,
        marginRight: 80,
        marginLeft: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    termsText: {
        color: "#FFFFFF",
        fontFamily: "Nunito-SemiBold",
        fontSize: 14,
        textAlign: "center",
    }
})

export default Login;

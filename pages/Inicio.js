import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from "react-native";

const InicioScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../img/fundopreto.png')} style={styles.background} resizeMode="cover">
            <View style={styles.container}>
                <Image source={require('../img/confeitaria.png')} style={styles.img}></Image>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.text}>Sign up for a secure and easy experience!</Text>
                <View style={styles.div}>

                    <TouchableOpacity
                        style={styles.button1} onPress={() => navigation.navigate("Home")}
                    >
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fffff",
    },
    img: {
        width: 230,
        height: 230,
        borderRadius: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 10,
        color: "#ffff"
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        marginVertical: 10,
        color: "#EDE9E3"
    },
    div: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        margin: 10,
    },
    button1: {
        width: '100%',
        backgroundColor: '#444444',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default InicioScreen;
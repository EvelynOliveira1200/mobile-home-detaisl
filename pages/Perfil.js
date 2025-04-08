import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
    return (
        <ImageBackground source={require('../img/fundopreto.png')} style={styles.background}>
            <View style={styles.overlay} />
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../img/FotoPerfil.jpg')} style={styles.perfil}></Image>
                    <Text style={styles.profileName}>Evelyn Oliveira</Text>
                    <Text style={styles.profileBio}>Work hard in silence. Let your success be the noise.</Text>
                </View>

                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menuItem}>
                        <Ionicons name="location-outline" size={24} color="#333" />
                        <Text style={styles.menuText}>My Address</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Ionicons name="person-outline" size={24} color="#333" />
                        <Text style={styles.menuText}>Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Ionicons name="notifications-outline" size={24} color="#333" />
                        <Text style={styles.menuText}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Ionicons name="phone-portrait-outline" size={24} color="#333" />
                        <Text style={styles.menuText}>Devices</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Ionicons name="key-outline" size={24} color="#333" />
                        <Text style={styles.menuText}>Passwords</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: "center",
        padding: 20,
        backgroundColor: "#FFF",
        margin: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    perfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    },
    profileBio: {
        fontSize: 14,
        color: "#777",
        textAlign: "center",
        marginTop: 5,
    },
    menuContainer: {
        marginTop: 10,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 10,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#EEE",
    },
    menuText: {
        fontSize: 16,
        marginLeft: 10,
        color: "#333",
    },
});

export default ProfileScreen;
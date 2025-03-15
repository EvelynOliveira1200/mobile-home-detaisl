import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
    return (
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    header: {
        alignItems: "center",
        padding: 20,
        backgroundColor: "#FFF",
    },
    profileImage: {
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
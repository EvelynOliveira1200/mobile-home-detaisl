import { useNavigation } from "@react-navigation/native";
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground
} from "react-native";
import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function CadastroScreen() {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const carregarCredenciaisSalvas = async () => {
            const nomeSalvo = await SecureStore.getItemAsync("username");
            const emailSalvo = await SecureStore.getItemAsync("userEmail");
            const senhaSalva = await SecureStore.getItemAsync("userPassword");

            if (nomeSalvo && emailSalvo && senhaSalva) {
                setUsername(nomeSalvo);
                setEmail(emailSalvo);
                setPassword(senhaSalva);
            }
        };
        carregarCredenciaisSalvas();
    }, []);

    const salvarCredenciais = async () => {
        try {
            await SecureStore.setItemAsync("username", username);
            await SecureStore.setItemAsync("userEmail", email);
            await SecureStore.setItemAsync("userPassword", password);

            Alert.alert("Sucesso", "Dados salvos com sucesso!");
            navigation.navigate("Perfil");
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar os dados.");
        }
    };

    return (
        <ImageBackground source={require('../img/fundopreto.png')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Sign Up</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nome de usuário"
                    placeholderTextColor="#747474"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#747474"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <View style={styles.passwordWrapper}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        placeholderTextColor="#747474"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.eyeTouchable}
                    >
                        <Icon
                            name={showPassword ? "visibility" : "visibility-off"}
                            size={22}
                            color="#747474"
                        />
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 20,
    },
    input: {
        width: '90%',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#E0D6CC',
        color: '#000',
    },
    passwordWrapper: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E0D6CC',
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    passwordInput: {
        flex: 1,
        paddingVertical: 15,
        paddingRight: 10,
        color: '#000',
    },
    eyeTouchable: {
        padding: 5,
    },
    div: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        margin: 10,
    },
    botao: {
        width: '100%',
        backgroundColor: '#444444',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    botao2: {
        width: '45%',
        backgroundColor: '#747474',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
});
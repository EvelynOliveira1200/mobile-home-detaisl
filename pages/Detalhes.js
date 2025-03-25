import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from "react-native";
import * as SecureStore from "expo-secure-store";

export default function CadastroScreen() {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');

    const validarUsername = (username) => {
        const usernameRegex = /^[a-zA-Z]{3,}[0-9_]{2,}$/;
        return usernameRegex.test(username);
    };

    const validarEmail = (email) => {
        return email.includes("@") && email.includes(".");
    };

    const salvarCredenciais = async () => {
        if (!username || !email || !password || !confirmSenha) {
            Alert.alert("Erro", "Preencha todos os campos");
            return;
        } 
        
        if (!validarUsername(username)) {
        Alert.alert("Erro", "O nome de usuário deve ter pelo menos 4 letras seguidas por 2 ou 3 números ou sinais como ");
        return;
    }

        if (!validarEmail(email)) {
            Alert.alert("Erro", "Insira um e-mail válido");
            return;
        }

        if (password.length < 6) {
            Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres");
            return;
        }

        if (password !== confirmSenha) {
            Alert.alert("Erro", "As senhas não coincidem");
            return;
        }

        try {
            await SecureStore.setItemAsync("username", username);
            await SecureStore.setItemAsync("userEmail", email);
            await SecureStore.setItemAsync("userPassword", password);

            Alert.alert("Sucesso", "Cadastro realizado com sucesso!");

            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmSenha('');

            navigation.navigate("Perfil");
        } catch (error) {
            Alert.alert("Erro", "Falha ao salvar credenciais");
        }
    };

    return (
        <ImageBackground source={require('../img/funfopreto.jpg')} style={styles.background}>
            <View style={styles.overlay} />
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

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#747474"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirme sua Senha"
                    placeholderTextColor="#747474"
                    secureTextEntry
                    value={confirmSenha}
                    onChangeText={setConfirmSenha}
                    autoCapitalize="none"
                />

                <View style={styles.div}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={salvarCredenciais}
                    >
                        <Text style={styles.textoBotao}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botao2}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Text style={styles.textoBotao}>Sign In</Text>
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
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
    },
    div: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        margin: 10,
    },
    botao: {
        width: '45%',
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

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from "react-native";
import * as SecureStore from "expo-secure-store";

const DetalhesScreen = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');

    const salvarCredenciais = async () => {
        if (username.trim() === "" || email.trim() === "" || confirmEmail.trim() === "" || password.trim() === "") {
            Alert.alert("Erro", "Preencha todos os campos");
            return;
        }
        if (email !== confirmEmail) {
            Alert.alert("Erro", "Os emails não coincidem");
            return;
        }
        try {
            await SecureStore.setItemAsync("username", username);
            await SecureStore.setItemAsync("userEmail", email);
            await SecureStore.setItemAsync("userPassword", password);
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!");

            navigation.navigate("Perfil");

            setUsername('');
            setEmail('');
            setConfirmEmail('');
            setPassword('');
        } catch (error) {
            Alert.alert("Erro", "Falha ao salvar credenciais");
        }
    };

    return (
        <ImageBackground source={require('../img/fundo.jpg')} style={styles.background}>
            <View style={styles.overlay} />
            <View style={styles.container}>
                <Text style={styles.titulo}>Cadastro</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nome de usuário"
                    placeholderTextColor="#B0A496"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#B0A496"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirme seu Email"
                    placeholderTextColor="#B0A496"
                    value={confirmEmail}
                    onChangeText={setConfirmEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#B0A496"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity
                    style={styles.botao}
                    onPress={salvarCredenciais}
                >
                    <Text style={styles.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>
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
        width: '100%',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#E0D6CC',
    },
    botao: {
        width: '100%',
        backgroundColor: '#6D4C41',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default DetalhesScreen;
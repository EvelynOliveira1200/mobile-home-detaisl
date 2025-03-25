import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [savedEmail, setSavedEmail] = useState('');
    const [savedPassword, setSavedPassword] = useState('');
    const textoSalvoSemPersistencia = "Texto exemplo";

    useEffect(() => {
        const loadCredentials = async () => {
            try {
                const storedEmail = await SecureStore.getItemAsync("userEmail");
                const storedPassword = await SecureStore.getItemAsync("userPassword");
                if (storedEmail) setSavedEmail(storedEmail);
                if (storedPassword) setSavedPassword(storedPassword);
            } catch (error) {
                Alert.alert("Erro", "Falha ao carregar credenciais");
            }
        };
        loadCredentials();
    }, []);

    const validateEmail = (email) => {
        return email.includes("@") && email.includes(".");
    };

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        if (!validateEmail(email)) {
            Alert.alert("Erro", "Por favor, insira um email válido.");
            return;
        }

        if (password.length < 6) {
            Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        try {
            await SecureStore.setItemAsync("userEmail", email);
            await SecureStore.setItemAsync("userPassword", password);
            setSavedEmail(email);
            setSavedPassword(password);
            Alert.alert("Sucesso", "Login realizado com sucesso!");

            setEmail('');
            setPassword('');

            navigation.navigate("Perfil", { textoNaoPersistido: textoSalvoSemPersistencia });
        } catch (error) {
            Alert.alert("Erro", "Falha ao salvar credenciais");
        }
    };

    const clearStoredCredentials = async () => {
        try {
            await SecureStore.deleteItemAsync("userEmail");
            await SecureStore.deleteItemAsync("userPassword");
            setSavedEmail('');
            setSavedPassword('');
            Alert.alert("Sucesso", "Credenciais apagadas!");
        } catch (error) {
            Alert.alert("Erro", "Falha ao apagar credenciais");
        }
    };

    return (
        <ImageBackground source={require('../img/funfopreto.jpg')} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
            <View style={styles.container}>
                <Text style={styles.title}>Welcome Back</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#747474"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#747474"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

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
    title: {
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
    button: {
        width: '90%',
        backgroundColor: '#747474',
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

export default LoginScreen;

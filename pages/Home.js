import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const carregarCredenciais = async () => {
            const emailSalvo = await SecureStore.getItemAsync("userEmail");
            const senhaSalva = await SecureStore.getItemAsync("userPassword");

            if (emailSalvo) setEmail(emailSalvo);
            if (senhaSalva) setPassword(senhaSalva);
        };
        carregarCredenciais();
    }, []);

    const handleLogin = async () => {
        try {
            await SecureStore.setItemAsync("userEmail", email);
            await SecureStore.setItemAsync("userPassword", password);
            Alert.alert("Sucesso", "Login realizado e dados salvos!");
            navigation.navigate("Detalhes");
        } catch (error) {
            Alert.alert("Erro", "Falha ao salvar os dados.");
        }
    };

    return (
        <ImageBackground source={require('../img/fundopreto.png')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome Back</Text>

                <TextInput
                    style={styles.input1}
                    placeholder="Email"
                    placeholderTextColor="#747474"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <View style={styles.passwordContainer}>
                    <TextInput
                        style={[styles.input, { paddingRight: 40 }]} 
                        placeholder="Password"
                        placeholderTextColor="#747474"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.eyeIcon}>
                        <Icon
                            name={showPassword ? "visibility" : "visibility-off"}
                            size={20}
                            color="#747474"
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Sign In</Text>
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
    input1: {
        width: '90%',
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#E0D6CC',
        height: 50,
        paddingVertical: 10,
    },
    input: {
        width: '100%',
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0D6CC',
        height: 50,
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
    passwordContainer: {
        position: 'relative', 
        width: '90%',
        marginBottom: 15,
    },
    eyeIcon: {
        position: 'absolute',
        right: 15, 
        top: '50%', 
        transform: [{ translateY: -10 }], 
    },
});

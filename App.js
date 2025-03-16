import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from 'react-native';

import InicioScreen from "./pages/Inicio";
import HomeScreen from "./pages/Home";
import DetalhesScreen from "./pages/Detalhes";
import PerfilScreen from "./pages/Perfil";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen
                    name="Inicio"
                    component={InicioScreen}
                    options={{
                        headerTitle: () => (
                            <Image
                                source={require("./img/logo.png")}
                                style={{ width: 150, height: 90, marginRight: 70 }}
                            />
                        ),
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerTitle: () => (
                            <Image
                                source={require('./img/logo.png')}
                                style={{ width: 150, height: 90, marginRight: 70 }}
                            />
                        ),
                    }}
                />
                <Stack.Screen name="Detalhes" component={DetalhesScreen}
                    options={{
                        headerTitle: () => (
                            <Image
                                source={require('./img/logo.png')}
                                style={{ width: 150, height: 90, marginRight: 70 }}
                            />
                        ),
                    }}
                />
                <Stack.Screen name="Perfil" component={PerfilScreen}
                    options={{
                        headerTitle: () => (
                            <Image
                                source={require('./img/logo.png')}
                                style={{ width: 150, height: 90, marginRight: 70 }}
                            />
                        ),
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
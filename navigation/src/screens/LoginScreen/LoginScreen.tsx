import React, { useState } from "react";

import {
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";

import {
  useNavigation,
} from "@react-navigation/native";

import {
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { AuthStackParamList } from "../../Routes";

import { AuthTemplate } from "../../components/templates";

import {
  LoginForm,
} from "../../components/organisms";

import {
  AuthService,
} from "../../core";

export default function LoginScreen():
React.JSX.Element {

  const navigation =
    useNavigation<
      NativeStackNavigationProp<AuthStackParamList>
    >();

  const [username, setUsername] =
    useState<string>("");

  const [password, setPassword] =
    useState<string>("");

  const handleRegister = (): void => {
    navigation.navigate("Register");
  };

  const handleLogin = async (): Promise<void> => {

    try {

      await AuthService.login(username);

      Alert.alert(
        "Éxito",
        "Inicio de sesión correcto"
      );

      navigation.navigate("Dashboard");

    } catch (error) {

      Alert.alert(
        "Error",
        "Usuario no encontrado"
      );

    }

  };

  return (
    <AuthTemplate title="Login">
      <LoginForm
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        onLogin={handleLogin}
      />

      <TouchableOpacity onPress={handleRegister}>
        <Text>Create Account</Text>
      </TouchableOpacity>
    </AuthTemplate>
  );
}
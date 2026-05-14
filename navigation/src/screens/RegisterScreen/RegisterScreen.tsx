import React from "react";
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
import {
  AuthStackParamList,
} from "../../Routes";
import {
  AuthTemplate,
} from "../../components/templates";
import {
  RegisterForm,
} from "../../components/organisms";
import {
  User,
  AuthService,
} from "../../core";

export default function RegisterScreen():
React.JSX.Element {

  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        AuthStackParamList
      >
    >();

  const handleLogin =
    (): void => {

      navigation.navigate(
        "Login"
      );

    };

  const handleRegister =
    async (
      user: User
    ): Promise<void> => {

      try {

        await AuthService.register(
          user
        );

        Alert.alert(
          "Éxito",
          "Usuario registrado"
        );

        navigation.navigate(
          "Login"
        );

      } catch (error) {

        Alert.alert(
          "Error",
          "El usuario ya existe"
        );

      }

    };

  return (

    <AuthTemplate title="Register">

      <RegisterForm
        onRegister={
          handleRegister
        }
      />

      <TouchableOpacity
        onPress={handleLogin}
      >

        <Text>
          Back to Login
        </Text>

      </TouchableOpacity>

    </AuthTemplate>

  );
}
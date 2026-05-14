import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AuthStackParamList } from "../../Routes";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";

export default function LoginScreen(): React.JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleRegister = (): void => {
    navigation.navigate("Register");
  };

  return (
    <AuthTemplate title="Login">
      <LoginForm onLogin={() => {}} />

      <TouchableOpacity onPress={handleRegister}>
        <Text>Create Account</Text>
      </TouchableOpacity>
    </AuthTemplate>
  );
}
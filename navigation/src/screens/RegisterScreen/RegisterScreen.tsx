import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AuthStackParamList } from "../../Routes";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";

export default function RegisterScreen(): React.JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleLogin = (): void => {
    navigation.navigate("Login");
  };

  return (
    <AuthTemplate title="Register">
      <RegisterForm />

      <TouchableOpacity onPress={handleLogin}>
        <Text>Back to Login</Text>
      </TouchableOpacity>
    </AuthTemplate>
  );
}
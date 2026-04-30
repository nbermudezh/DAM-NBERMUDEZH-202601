import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/molecules";

export default function LoginScreen({ navigation }: any) {
  return (
    <AuthTemplate title="LOGIN">
      <LoginForm onLogin={() => {}} />

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ marginTop: 20 }}>
          Don't have an account? SIGN UP
        </Text>
      </TouchableOpacity>
    </AuthTemplate>
  );
}
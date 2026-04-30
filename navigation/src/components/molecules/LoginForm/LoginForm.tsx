import React from "react";
import { View } from "react-native";
import { Input, Button } from "../../atoms";

interface Props {
  onLogin: () => void;
}

export default function LoginForm({ onLogin }: Props) {
  return (
    <View>
      <Input placeholder="Username" />
      <Input placeholder="Password" secureTextEntry />
      <Button title="LOGIN" onPress={onLogin} />
    </View>
  );
}
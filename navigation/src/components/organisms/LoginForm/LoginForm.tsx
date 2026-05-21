import React from "react";
import { View } from "react-native";

import {
  Input,
  Button,
} from "../../atoms";

interface Props {
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  onLogin: () => void;
}

export default function LoginForm({
  username,
  password,
  setUsername,
  setPassword,
  onLogin,
}: Props): React.JSX.Element {
  return (
    <View>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="LOGIN"
        onPress={onLogin}
      />
    </View>
  );
}
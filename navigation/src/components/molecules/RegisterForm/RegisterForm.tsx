import React from "react";
import { View } from "react-native";
import { Input, Button } from "../../atoms";

export default function RegisterForm() {
  return (
    <View>
      <Input placeholder="Full Name" />
      <Input placeholder="Username" />
      <Input placeholder="Email Address" />
      <Input placeholder="Date of Birth" />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm Password" secureTextEntry />
      <Button title="CREATE ACCOUNT" onPress={() => {}} />
    </View>
  );
}
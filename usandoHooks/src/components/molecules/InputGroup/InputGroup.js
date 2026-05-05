import React from "react";
import { View, TextInput } from "react-native";
import { Button } from "../../atoms";

export default function InputGroup({ value, setValue, onPress }) {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
      />
      <Button title="OK" onPress={onPress} />
    </View>
  );
}
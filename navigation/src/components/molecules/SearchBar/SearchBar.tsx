import React from "react";

import {
  View,
  TextInput,
} from "react-native";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchBar({
  value,
  onChangeText,
}: Props): React.JSX.Element {

  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
      }}
    >
      <TextInput
        placeholder="Buscar producto..."
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

interface Props {
  placeholder: string;
  secureTextEntry?: boolean;
}

export default function Input({
  placeholder,
  secureTextEntry = false,
}: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
}
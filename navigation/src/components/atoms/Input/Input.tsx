import React from "react";
import { TextInput } from "react-native";

import styles from "./styles";

interface Props {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
}

export default function Input({
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
}: Props): React.JSX.Element {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
}
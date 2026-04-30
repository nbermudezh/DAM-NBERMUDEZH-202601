import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function AuthContainer({ title, children }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}
import React from "react";
import { View } from "react-native";
import { Calculator } from "../../components/organisms";
import styles from "./styles";

export default function CalculateScreen() {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
}
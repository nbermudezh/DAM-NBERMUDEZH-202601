import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function BotonCalculadora({ texto, onPress, tipo }) {
  return (
    <TouchableOpacity
      style={[
        styles.boton,
        tipo === "operador" && styles.operador,
        tipo === "igual" && styles.igual,
      ]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}
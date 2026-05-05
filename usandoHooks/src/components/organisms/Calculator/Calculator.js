import React, { useState } from "react";
import { View, Text } from "react-native";
import { BotonCalculadora } from "../../atoms";
import styles from "./styles";

export default function Calculator() {
  const [pantalla, setPantalla] = useState("");

  const manejarEntrada = (valor) => {
    setPantalla(pantalla + valor);
  };

  const limpiar = () => setPantalla("");

  const calcular = () => {
    try {
      const resultado = eval(pantalla);
      setPantalla(resultado.toString());
    } catch {
      setPantalla("Error");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pantalla}>{pantalla || "0"}</Text>

      <View style={styles.teclado}>
        <View style={styles.fila}>
          <BotonCalculadora texto="7" onPress={() => manejarEntrada("7")} />
          <BotonCalculadora texto="8" onPress={() => manejarEntrada("8")} />
          <BotonCalculadora texto="9" onPress={() => manejarEntrada("9")} />
          <BotonCalculadora texto="/" tipo="operador" onPress={() => manejarEntrada("/")} />
        </View>

        <View style={styles.fila}>
          <BotonCalculadora texto="4" onPress={() => manejarEntrada("4")} />
          <BotonCalculadora texto="5" onPress={() => manejarEntrada("5")} />
          <BotonCalculadora texto="6" onPress={() => manejarEntrada("6")} />
          <BotonCalculadora texto="*" tipo="operador" onPress={() => manejarEntrada("*")} />
        </View>

        <View style={styles.fila}>
          <BotonCalculadora texto="1" onPress={() => manejarEntrada("1")} />
          <BotonCalculadora texto="2" onPress={() => manejarEntrada("2")} />
          <BotonCalculadora texto="3" onPress={() => manejarEntrada("3")} />
          <BotonCalculadora texto="-" tipo="operador" onPress={() => manejarEntrada("-")} />
        </View>

        <View style={styles.fila}>
          <BotonCalculadora texto="0" onPress={() => manejarEntrada("0")} />
          <BotonCalculadora texto="C" tipo="operador" onPress={limpiar} />
          <BotonCalculadora texto="=" tipo="igual" onPress={calcular} />
          <BotonCalculadora texto="+" tipo="operador" onPress={() => manejarEntrada("+")} />
        </View>
      </View>
    </View>
  );
}
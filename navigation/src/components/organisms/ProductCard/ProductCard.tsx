import React from "react";

import {
  View,
  Text,
} from "react-native";

interface Props {
  nombre: string;
  codigo: string;
  cantidadStock: string;
  costoCompra: string;
  precioVenta: string;
  descripcion: string;
}

export default function ProductCard({
  nombre,
  codigo,
  cantidadStock,
  costoCompra,
  precioVenta,
  descripcion,
}: Props): React.JSX.Element {

  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        elevation: 5,
      }}
    >

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {nombre}
      </Text>

      <Text>
        Código: {codigo}
      </Text>

      <Text>
        Stock: {cantidadStock}
      </Text>

      <Text>
        Compra: ${costoCompra}
      </Text>

      <Text>
        Venta: ${precioVenta}
      </Text>

      <Text>
        {descripcion}
      </Text>

    </View>
  );
}
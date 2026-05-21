import React from "react";

import { View } from "react-native";

import {
  Input,
  Button,
} from "../../atoms";

interface Props {
  nombre: string;
  codigo: string;
  cantidadStock: string;
  costoCompra: string;
  precioVenta: string;
  descripcion: string;

  setNombre: (value: string) => void;
  setCodigo: (value: string) => void;
  setCantidadStock: (value: string) => void;
  setCostoCompra: (value: string) => void;
  setPrecioVenta: (value: string) => void;
  setDescripcion: (value: string) => void;

  onSave: () => void;
}

export default function RegisterProductForm({
  nombre,
  codigo,
  cantidadStock,
  costoCompra,
  precioVenta,
  descripcion,
  setNombre,
  setCodigo,
  setCantidadStock,
  setCostoCompra,
  setPrecioVenta,
  setDescripcion,
  onSave,
}: Props): React.JSX.Element {

  return (
    <View>

      <Input
        placeholder="Nombre del producto"
        value={nombre}
        onChangeText={setNombre}
      />

      <Input
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
      />

      <Input
        placeholder="Cantidad stock"
        value={cantidadStock}
        onChangeText={setCantidadStock}
      />

      <Input
        placeholder="Costo de compra"
        value={costoCompra}
        onChangeText={setCostoCompra}
      />

      <Input
        placeholder="Precio de venta ($)"
        value={precioVenta}
        onChangeText={setPrecioVenta}
      />

      <Input
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <Button
        title="GUARDAR PRODUCTO"
        onPress={onSave}
      />

    </View>
  );
}
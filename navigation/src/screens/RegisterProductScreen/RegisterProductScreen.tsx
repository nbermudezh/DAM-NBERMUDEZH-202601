import React, {
  useState,
} from "react";

import {
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";

import {
  useNavigation,
} from "@react-navigation/native";

import {
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { AuthStackParamList } from "../../Routes";

import {
  AuthTemplate,
} from "../../components/templates";

import {
  RegisterProductForm,
} from "../../components/organisms";

import {
  ProductService,
} from "../../core";

export default function RegisterProductScreen():
React.JSX.Element {

  const navigation =
    useNavigation<
      NativeStackNavigationProp<AuthStackParamList>
    >();

  const [nombre, setNombre] =
    useState<string>("");

  const [codigo, setCodigo] =
    useState<string>("");

  const [cantidadStock, setCantidadStock] =
    useState<string>("");

  const [costoCompra, setCostoCompra] =
    useState<string>("");

  const [precioVenta, setPrecioVenta] =
    useState<string>("");

  const [descripcion, setDescripcion] =
    useState<string>("");

  const handleSave =
    async (): Promise<void> => {

      try {

        await ProductService.create({
          nombre,
          codigo,
          cantidadStock,
          costoCompra,
          precioVenta,
          descripcion,
        });

        Alert.alert(
          "Éxito",
          "Producto registrado"
        );

        navigation.navigate(
          "Dashboard"
        );

      } catch (error) {

        Alert.alert(
          "Error",
          "No se pudo registrar"
        );

      }

    };

  const handleBack =
    (): void => {

      navigation.navigate(
        "Dashboard"
      );

    };

  return (
    <AuthTemplate title="Nuevo Producto">

      <RegisterProductForm
        nombre={nombre}
        codigo={codigo}
        cantidadStock={cantidadStock}
        costoCompra={costoCompra}
        precioVenta={precioVenta}
        descripcion={descripcion}
        setNombre={setNombre}
        setCodigo={setCodigo}
        setCantidadStock={setCantidadStock}
        setCostoCompra={setCostoCompra}
        setPrecioVenta={setPrecioVenta}
        setDescripcion={setDescripcion}
        onSave={handleSave}
      />

      <TouchableOpacity
        onPress={handleBack}
      >
        <Text>
          Back to Catalog
        </Text>
      </TouchableOpacity>

    </AuthTemplate>
  );
}
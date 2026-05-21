import React, {
  useEffect,
  useState,
} from "react";

import {
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import {
  useNavigation,
} from "@react-navigation/native";

import {
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { AuthStackParamList } from "../../Routes";

import {
  DashboardTemplate,
} from "../../components/templates";

import {
  ProductCard,
} from "../../components/organisms";

import {
  SearchBar,
} from "../../components/molecules";

import {
  Product,
  ProductService,
  AuthService,
} from "../../core";

export default function DashboardScreen():
React.JSX.Element {

  const navigation =
    useNavigation<
      NativeStackNavigationProp<AuthStackParamList>
    >();

  const [products, setProducts] =
    useState<Product[]>([]);

  const [search, setSearch] =
    useState<string>("");

  const loadProducts =
    async (): Promise<void> => {

      const data =
        await ProductService.getAll();

      setProducts(data);

    };

  useEffect(() => {

    const unsubscribe =
      navigation.addListener(
        "focus",
        () => {

          loadProducts();

        }
      );

    return unsubscribe;

  }, [navigation]);

  const handleRegisterProduct =
    (): void => {

      navigation.navigate(
        "RegisterProduct"
      );

    };

  const handleLogout =
    async (): Promise<void> => {

      await AuthService.logout();

      navigation.navigate(
        "Login"
      );

    };

  const filteredProducts =
    products.filter((product) =>
      product.nombre
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <DashboardTemplate>

      <SearchBar
        value={search}
        onChangeText={setSearch}
      />

      <TouchableOpacity
        onPress={handleRegisterProduct}
        style={{
          backgroundColor: "#000",
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          NUEVO PRODUCTO
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: "red",
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          CERRAR SESIÓN
        </Text>
      </TouchableOpacity>

      <View>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            nombre={product.nombre}
            codigo={product.codigo}
            cantidadStock={product.cantidadStock}
            costoCompra={product.costoCompra}
            precioVenta={product.precioVenta}
            descripcion={product.descripcion}
          />
        ))}
      </View>

    </DashboardTemplate>
  );
}
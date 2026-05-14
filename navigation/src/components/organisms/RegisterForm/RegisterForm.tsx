import React, { useState } from "react";
import { View } from "react-native";

import {
  Input,
  Button,
} from "../../atoms";

import { User } from "../../../core";

interface Props {
  onRegister: (user: User) => void;
}

export default function RegisterForm({
  onRegister,
}: Props): React.JSX.Element {

  const [nombre, setNombre] =
    useState("");

  const [usuario, setUsuario] =
    useState("");

  const [correo, setCorreo] =
    useState("");

  const [
    fechaNacimiento,
    setFechaNacimiento,
  ] = useState("");

  const [
    contrasena,
    setContrasena,
  ] = useState("");

  const [
    confirmarContrasena,
    setConfirmarContrasena,
  ] = useState("");

  const handleRegister = (): void => {

    if (
      contrasena !==
      confirmarContrasena
    ) {

      console.log(
        "Las contraseñas no coinciden"
      );

      return;

    }

    onRegister({
      nombre,
      usuario,
      correo,
      fechaNacimiento,
      contrasena,
    });

  };

  return (
    <View>

      <Input
        placeholder="Full Name"
        value={nombre}
        onChangeText={setNombre}
      />

      <Input
        placeholder="Username"
        value={usuario}
        onChangeText={setUsuario}
      />

      <Input
        placeholder="Email Address"
        value={correo}
        onChangeText={setCorreo}
      />

      <Input
        placeholder="Date of Birth"
        value={fechaNacimiento}
        onChangeText={
          setFechaNacimiento
        }
      />

      <Input
        placeholder="Password"
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
      />

      <Input
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmarContrasena}
        onChangeText={
          setConfirmarContrasena
        }
      />

      <Button
        title="CREATE ACCOUNT"
        onPress={handleRegister}
      />

    </View>
  );
}
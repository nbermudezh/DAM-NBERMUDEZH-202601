import React from "react";

import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import {
  LoginScreen,
  RegisterScreen,
  DashboardScreen,
  RegisterProductScreen,
} from "./screens";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  RegisterProduct: undefined;
};

const Stack =
  createNativeStackNavigator<AuthStackParamList>();

export default function Routes(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
        />

        <Stack.Screen
          name="RegisterProduct"
          component={RegisterProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
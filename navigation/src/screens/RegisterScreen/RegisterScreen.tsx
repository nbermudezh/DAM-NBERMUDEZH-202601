import React from "react";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/molecules";

export default function RegisterScreen() {
  return (
    <AuthTemplate title="REGISTER">
      <RegisterForm />
    </AuthTemplate>
  );
}
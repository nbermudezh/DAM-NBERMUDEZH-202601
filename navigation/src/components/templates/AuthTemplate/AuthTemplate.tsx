import React from "react";
import { AuthContainer } from "../../organisms";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function AuthTemplate({ title, children }: Props) {
  return <AuthContainer title={title}>{children}</AuthContainer>;
}
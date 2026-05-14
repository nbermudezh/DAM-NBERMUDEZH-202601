import React from "react";
import {
  View,
  Text,
  SafeAreaView,
} from "react-native";

import styles from "./AuthTemplateStyles";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function AuthTemplate({
  title,
  children,
}: Props): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          {title}
        </Text>

        {children}
      </View>
    </SafeAreaView>
  );
}
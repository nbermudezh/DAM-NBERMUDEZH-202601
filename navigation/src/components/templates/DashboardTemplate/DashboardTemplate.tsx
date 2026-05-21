import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
} from "react-native";

import styles from "./DashboardTemplateStyles";

interface Props {
  children: React.ReactNode;
}

export default function DashboardTemplate({
  children,
}: Props): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Productos
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
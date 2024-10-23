import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import type { LoadingSpinnerProps } from "../types";
import { COLORS } from "../constants/colors";

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "large",
  color = COLORS.primary,
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  text: {
    marginTop: 10,
    color: COLORS.text.primary,
  },
});

export default LoadingSpinner;

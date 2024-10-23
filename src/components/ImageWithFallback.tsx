import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { COLORS } from "../constants/colors";

interface ImageWithFallbackProps {
  source: string;
  style: object;
  contentFit?: "cover" | "contain";
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  source,
  style,
  contentFit = "cover",
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <View style={[style, styles.errorContainer]}>
        <Text style={styles.errorText}>Unable to load image</Text>
      </View>
    );
  }

  return (
    <Image
      source={source}
      style={style}
      contentFit={contentFit}
      transition={300}
      onError={() => setHasError(true)}
    />
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: COLORS.error,
    textAlign: "center",
  },
});

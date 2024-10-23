import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

interface RefreshIndicatorProps {
  progress: Animated.SharedValue<number>;
}

const RefreshIndicator: React.FC<RefreshIndicatorProps> = ({ progress }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: withSpring(Math.min(progress.value, 1)) },
      { rotate: `${progress.value * 360}deg` },
    ],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <MaterialCommunityIcons name="rocket" size={24} color={COLORS.primary} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RefreshIndicator;

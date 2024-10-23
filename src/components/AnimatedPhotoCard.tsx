import React from "react";
import { TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { ImageWithFallback } from "./ImageWithFallback";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import type { PhotoCardProps } from "../types";

const AnimatedCard = Animated.createAnimatedComponent(Card);

const AnimatedPhotoCard: React.FC<PhotoCardProps> = ({
  item,
  onPress,
  style,
}) => {
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { rotateZ: `${rotation.value}deg` }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
    rotation.value = withSequence(
      withTiming(-2, { duration: 100 }),
      withTiming(2, { duration: 100 }),
      withTiming(0, { duration: 100 })
    );
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
    >
      <AnimatedCard style={[style, animatedStyle]}>
        <ImageWithFallback
          source={item.img_src}
          style={{ width: "100%", height: 200 }}
          contentFit="cover"
        />
        <Card.Content>
          <Title>Photo ID: {item.id}</Title>
          <Paragraph>Date: {item.earth_date}</Paragraph>
        </Card.Content>
      </AnimatedCard>
    </TouchableOpacity>
  );
};

export default AnimatedPhotoCard;

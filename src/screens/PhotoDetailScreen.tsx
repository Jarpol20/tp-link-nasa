import React from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { Appbar, Text, Card } from "react-native-paper";
import { Image } from 'expo-image';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../types";
import { COLORS } from "../constants/colors";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = NativeStackScreenProps<RootStackParamList, "PhotoDetail">;

const { width } = Dimensions.get("window");

const PhotoDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { photo } = route.params;

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Photo Details" />
      </Appbar.Header>
      <ScrollView>
        <Animated.View entering={FadeInDown}>
          <Image
            source={photo.img_src}
            style={styles.image}
            contentFit="cover"
            transition={300}
          />
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Photo ID:</Text>
                <Text style={styles.value}>{photo.id}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Date Taken:</Text>
                <Text style={styles.value}>{photo.earth_date}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Rover:</Text>
                <Text style={styles.value}>{photo.rover}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Camera:</Text>
                <Text style={styles.value}>{photo.camera}</Text>
              </View>
            </Card.Content>
          </Card>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  image: {
    width: width,
    height: width * 0.75,
  },
  card: {
    margin: 16,
    elevation: 4,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.text.disabled,
  },
  label: {
    color: COLORS.text.secondary,
    fontSize: 16,
  },
  value: {
    color: COLORS.text.primary,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default PhotoDetailScreen;
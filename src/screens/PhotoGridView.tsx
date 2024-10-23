// PhotoGridView.tsx
import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNASAPhotos } from "../hooks/useNASAPhotos";
import AnimatedPhotoCard from "../components/AnimatedPhotoCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigation } from "@react-navigation/native";
import type { MarsPhoto } from "../types";
import { COLORS } from "../constants/colors";
import { handleError } from "../utils/helpers";

type SortOrder = "asc" | "desc";

const PhotoGridView = () => {
  const { data, isLoading, error, refetch } = useNASAPhotos();
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const navigation = useNavigation();

  const sortedData = React.useMemo(() => {
    if (!data) return [];
    return [...data].sort((a, b) => {
      return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
    });
  }, [data, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((current) => (current === "asc" ? "desc" : "asc"));
  };

  const renderItem = ({ item }: { item: MarsPhoto }) => (
    <AnimatedPhotoCard
      item={item}
      onPress={() => navigation.navigate("PhotoDetail", { photo: item })}
      style={styles.gridCard}
    />
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorMessage message={handleError(error)} onRetry={() => refetch()} />
    );
  }

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Mars Rover Photos" />
        <Appbar.Action
          onPress={toggleSortOrder}
          icon={() => (
            <MaterialCommunityIcons
              name={sortOrder === "asc" ? "sort-ascending" : "sort-descending"}
              size={24}
              color={COLORS.text.primary}
            />
          )}
        />
      </Appbar.Header>
      <FlatList
        data={sortedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  gridCard: {
    flex: 1,
    margin: 4,
  },
});

export default PhotoGridView;

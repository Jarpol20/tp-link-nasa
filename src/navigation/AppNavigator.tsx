// AppNavigator.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { MarsPhoto } from "../types";
import { COLORS } from "../constants/colors";

import PhotoListView from "../screens/PhotoListView";
import PhotoGridView from "../screens/PhotoGridView";
import PhotoDetailScreen from "../screens/PhotoDetailScreen";

type RootStackParamList = {
  MainTabs: undefined;
  PhotoDetail: { photo: MarsPhoto };
};

type TabParamList = {
  List: undefined;
  Grid: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons: { [key: string]: string } = {
            List: focused ? "view-list" : "view-list-outline",
            Grid: focused ? "view-grid" : "view-grid-outline",
          };
          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.text.disabled,
        headerShown: false,
      })}
    >
      <Tab.Screen name="List" component={PhotoListView} />
      <Tab.Screen name="Grid" component={PhotoGridView} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="PhotoDetail" component={PhotoDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

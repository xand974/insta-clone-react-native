import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "./FeedScreen";
import SearchScreen from "./SearchScreen";
import ProfileScreen from "./ProfileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "FeedScreen":
              iconName = focused ? "home" : "home-outline";
              color = focused && "black";
              size = 30;
              break;
            case "SearchScreen":
              iconName = focused ? "search" : "search-outline";
              color = focused && "black";
              size = 30;
              break;
            case "ProfileScreen":
              iconName = focused ? "person-sharp" : "person-outline";
              color = focused && "black";
              size = 30;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="FeedScreen" component={FeedScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
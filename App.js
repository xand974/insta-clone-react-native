import React, { useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <Stack.Group>
            <Stack.Screen
              name="HomeScreen"
              options={{ headerShown: false }}
              component={HomeScreen}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="RegisterScreen"
              options={{ headerShown: false }}
              component={RegisterScreen}
            />
            <Stack.Screen
              name="LoginScreen"
              options={{ headerShown: false }}
              component={LoginScreen}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

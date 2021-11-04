import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Loading from "./components/Loading";
import AddPostScreen from "./screens/AddPostScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        setLoading(true);
      } else {
        setLoggedIn(false);
        setLoading(true);
      }
    });
    return unsubscribed;
  }, []);

  if (!loading) {
    return <Loading />;
  }

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

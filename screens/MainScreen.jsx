import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import Card from "../components/Card";
import { TouchableOpacity } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Icon from "react-native-vector-icons/AntDesign";
import tw from "tailwind-react-native-classnames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPostScreen from "./AddPostScreen";
import FeedScreen from "./FeedScreen";
const Stack = createNativeStackNavigator();
//#region style
const HeaderTextContainer = styled.View`
  margin-left: 20px;
`;
const HeaderImg = styled.Image`
  width: 110px;
  height: 30px;
`;

//#endregion

export default function MainScreen() {
  const navigation = useNavigation();

  //#region layout
  useLayoutEffect(() => {
    navigation.setOptions({
      title: null,
      headerLeft: () => (
        <HeaderTextContainer>
          <HeaderImg
            source={{
              uri: "https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png",
            }}
          />
        </HeaderTextContainer>
      ),
      headerRight: () => (
        <View style={tw`flex-row mr-3 items-center`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddPostScreen")}
          >
            <Icon name="plus" color="black" size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`ml-5`}
            onPress={async () => await signOut(auth)}
          >
            <Icon name="logout" color="black" size={21} />
          </TouchableOpacity>
        </View>
      ),
      headerShadowVisible: false,
    });
  }, []);
  //#endregion

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FeedScreen"
        options={{ headerShown: false }}
        component={FeedScreen}
      />
      <Stack.Screen
        name="AddPostScreen"
        options={{ headerShown: false }}
        component={AddPostScreen}
      />
    </Stack.Navigator>
  );
}

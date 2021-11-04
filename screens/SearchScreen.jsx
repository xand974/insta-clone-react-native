import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import styled from "styled-components";
import UserListItem from "../components/UserListItem";
import { useEffect } from "react";
import { getUsers } from "../redux/firebaseCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { resetUsers } from "../redux/userSlice";
//#region  style
const TopContainer = styled.View`
  width: 80%;
  height: 60px;
  margin: auto;
  align-items: center;
  flex-direction: row;
`;

const Input = styled.TextInput`
  border-bottom-width: 1px;
  flex: 1;
  border-bottom-color: lightgray;
  padding: 5px;
  font-size: 17px;
`;
const MainContainer = styled.ScrollView`
  height: 100%;
  width: 90%;

  margin: 20px auto;
`;
//#endregion

export default function SearchScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    userInput.length >= 3 && getUsers(dispatch);
  }, [userInput]);

  useEffect(() => {
    userInput.length == 0 && dispatch(resetUsers());
  }, [userInput]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: null,
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <TopContainer>
        <Input
          placeholder="chercher un utilisateur"
          onChangeText={(text) => setUserInput(text)}
        />
      </TopContainer>
      <MainContainer>
        {users
          .filter((user) => {
            return user.data.username
              .toLowerCase()
              .includes(userInput.toLowerCase());
          })
          .map((user) => (
            <UserListItem key={user.id} item={user.data} id={user.id} />
          ))}
      </MainContainer>
    </SafeAreaView>
  );
}

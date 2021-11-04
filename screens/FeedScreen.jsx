import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../redux/firebaseCalls";
import { useDispatch } from "react-redux";
//#region style
const Container = styled.View`
  height: 100%;
  background-color: white;
  padding-top: 10px;
`;
const ScrollContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

//#endregion

export default function FeedScreen() {
  const navigation = useNavigation();
  const { userPosts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  console.log(userPosts);
  useEffect(() => {
    const unsubscribed = getPosts(dispatch);

    return unsubscribed;
  }, []);

  return (
    <Container>
      <ScrollContainer>
        {userPosts.map((post) => (
          <Card item={post.data} key={post.id} />
        ))}
      </ScrollContainer>
    </Container>
  );
}

const styles = StyleSheet.create({});

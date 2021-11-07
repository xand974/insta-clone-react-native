import { useNavigation } from "@react-navigation/native";
import React from "react";
import { KeyboardAvoidingView } from "react-native";
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
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribed = getPosts(dispatch);

    return unsubscribed;
  }, []);

  return (
    <Container>
      <KeyboardAvoidingView behavior="padding">
        <ScrollContainer>
          {posts.map((post) => (
            <Card item={post.data} id={post.id} key={post.id} />
          ))}
        </ScrollContainer>
      </KeyboardAvoidingView>
    </Container>
  );
}

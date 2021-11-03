import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import Card from "../components/Card";

export default function FeedScreen() {
  const HeaderTextContainer = styled.View`
    margin-left: 20px;
  `;
  const HeaderImg = styled.Image`
    width: 110px;
    height: 30px;
  `;
  const Container = styled.View`
    height: 100%;
    background-color: white;
    padding-top: 10px;
  `;
  const ScrollContainer = styled.ScrollView`
    width: 100%;
    height: 100%;
  `;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerLeft: () => (
        <HeaderTextContainer>
          <HeaderImg
            source={{
              uri: "https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png",
            }}
          />
        </HeaderTextContainer>
      ),
      headerShadowVisible: false,
    });
  }, []);
  return (
    <Container>
      <ScrollContainer>
        <Card />
      </ScrollContainer>
    </Container>
  );
}

const styles = StyleSheet.create({});

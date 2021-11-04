import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const LoadingText = styled.Text``;
export default function Loading() {
  return (
    <Container>
      <LoadingText>Loading</LoadingText>
    </Container>
  );
}

const styles = StyleSheet.create({});

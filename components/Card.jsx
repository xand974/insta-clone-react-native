import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export default function Card() {
  const CardContainer = styled.View`
    width: 100%;
    height: 700px;
    background-color: blue;
  `;
  const CardHeader = styled.View`
    width: 90%;
    margin: 0 auto;
    height: 10%;
    background-color: red;
  `;
  const CardBody = styled.View`
    width: 100%;
    height: 85%;
    background: #000;
  `;
  const Img = styled.Image`
    width: 100%;
    height: 60%;
  `;
  const CardFeatures = styled.View`
    height: 10%;
    background-color: beige;
  `;
  const CardContent = styled.View`
    height: 30%;
    background-color: powderblue;
  `;
  const CardComments = styled.View`
    height: 10%;
    background-color: azure;
  `;
  const CardFooter = styled.View`
    background-color: blueviolet;
    height: 5%;
  `;

  return (
    <CardContainer>
      <CardHeader>{/*photo de profile - author */}</CardHeader>
      <CardBody>
        <Img
          source={{
            uri: "https://www.designyourway.net/blog/wp-content/uploads/2020/01/instagram-2-1.jpg",
          }}
        />
        <CardFeatures>{/*Like Comments Share*/}</CardFeatures>
        <CardContent>
          {/*Aimé par , */}
          {/*Text - Author */}
          {/*Text - Description */}
          <CardComments>
            {/*text btn - Voir les 40 commentaires*/}
            {/*Text - Author -  comment*/}
            {/*Text - Author -  comment*/}
          </CardComments>
        </CardContent>
      </CardBody>
      <CardFooter>{/*Text - Il y a 23heures */}</CardFooter>
    </CardContainer>
  );
}

const styles = StyleSheet.create({});

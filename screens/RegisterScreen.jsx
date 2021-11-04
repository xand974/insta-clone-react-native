import React, { useState } from "react";
import { KeyboardAvoidingView, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { register } from "../redux/firebaseCalls";

//#region style
const Shape = styled.View`
  position: absolute;
  width: 100%;
  height: 40px;
  background: #000;
  top: 0;
  left: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const TextShape = styled.Text`
  font-weight: 300;
  letter-spacing: 2px;
  color: white;
  font-family: "Didot";
  font-size: 15px;
`;
const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 30px black;

  position: relative;
`;
const BackgroundImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const InputContainer = styled.View`
  width: 70%;
  height: 370px;
  background: #fff;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
`;
const Input = styled.TextInput`
  margin-bottom: 20px;
  border-bottom-width: 1px;
  width: 70%;
  padding-left: 5px;
  padding-bottom: 10px;
  border-bottom-color: lightgray;
`;
const CustomButton = styled.TouchableOpacity`
  border-width: 1px;
  width: 70%;
  padding: 5px;
  align-items: center;
  border-radius: 5px;
`;
const CustomButtonText = styled.Text`
  color: black;
`;

const RedirectButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

const RedirectButtonText = styled.Text`
  color: gray;
  font-size: 13px;
  font-weight: 300;
`;
//#endregion
export default function RegisterScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding">
      <Container>
        <BackgroundImage
          source={{
            uri: "https://images.unsplash.com/photo-1635807013737-0717f29cdbaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <InputContainer>
          <Shape
            style={{
              transform: [
                { rotate: "-30deg" },
                { translateX: -70 },
                { translateY: -30 },
              ],
            }}
          >
            <TextShape>Instagram</TextShape>
          </Shape>
          <Input
            placeholder="username"
            onChangeText={(text) => setUsername(text)}
          />
          <Input placeholder="email" onChangeText={(text) => setEmail(text)} />

          <Input
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <Input
            placeholder="photo url (optional)"
            onChangeText={(text) => setImg(text)}
          />
          <CustomButton
            title="s'enregistrer"
            onPress={() => register(email, password, username, img)}
          >
            <CustomButtonText>S'enregistrer</CustomButtonText>
          </CustomButton>
          <RedirectButton onPress={() => navigation.navigate("LoginScreen")}>
            <RedirectButtonText>se connecter</RedirectButtonText>
          </RedirectButton>
        </InputContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}

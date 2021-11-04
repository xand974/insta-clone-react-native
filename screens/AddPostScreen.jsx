import React, { useState } from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements/dist/input/Input";
import tw from "tailwind-react-native-classnames";
import { addPost } from "../redux/firebaseCalls";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
export default function AddPostScreen() {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const navigation = useNavigation();
  return (
    <View style={tw`mt-10`}>
      <Input
        placeholder="description"
        onChangeText={(text) => setContent(text)}
      />
      <Input placeholder="image url" onChangeText={(text) => setImage(text)} />
      <TouchableOpacity
        title="créer un post"
        style={tw`bg-black p-3 w-3/6 m-auto `}
        onPress={() => addPost(dispatch, content, image, navigation)}
      >
        <Text style={tw`text-white text-center`}>Créer un post</Text>
      </TouchableOpacity>

      <Text style={tw`text-center mt-10 text-gray-400`}>
        prise en charge de l'appareil photo à venir
      </Text>
    </View>
  );
}

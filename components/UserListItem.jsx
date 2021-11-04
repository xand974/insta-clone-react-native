import React from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Avatar } from "react-native-elements";
import RoundedInlineButton from "./RoundedLineButton";
import { auth } from "../firebase";

export default function UserListItem({ item, handleAddUser, id }) {
  return (
    <View
      style={tw.style(
        `items-center flex-row w-full pt-8 pb-8 pl-4 bg-${"white"} mt-3 border-b-2 border-gray-100`
      )}
    >
      <View style={tw`flex-1`}>
        <Avatar
          size={40}
          rounded
          source={{
            uri: item?.photoURL || "https://i.stack.imgur.com/6FiRR.png",
          }}
        />
      </View>
      <View style={tw.style(``, { flex: 4 })}>
        <Text style={tw`font-bold text-black text-lg`}>{item?.username}</Text>
      </View>
      <View style={tw`flex-1 mr-2`}>
        {id !== auth.currentUser.uid && (
          <RoundedInlineButton
            nameIcon="plus"
            typeIcon="antdesign"
            sizeIcon={20}
            disabled={id === auth.currentUser.uid && true}
            onPress={() => {
              handleAddUser(id);
            }}
          />
        )}
      </View>
    </View>
  );
}

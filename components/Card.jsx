import React from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import styled from "styled-components";
import EntIcon from "react-native-vector-icons/Entypo";
import FontIcon from "react-native-vector-icons/FontAwesome";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useEffect } from "react";
import {
  commentPost,
  getCommentsPost,
  getCreator,
} from "../redux/firebaseCalls";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { auth } from "../firebase";
const CardContainer = styled.View`
  width: 100%;
  height: 650px;
`;
export default function Card({ item, id }) {
  const dispatch = useDispatch();
  const { creator } = useSelector((state) => state.posts);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const unsubscribed = getCreator(dispatch, item.userId);
    return unsubscribed;
  }, []);

  const handleComment = async () => {
    comment.length !== 0 &&
      commentPost(dispatch, comment, id, auth.currentUser.uid);
  };

  //#region Header

  const CardHeader = styled.View`
    width: 95%;
    margin: 0 auto;
    height: 10%;
    align-items: center;
    flex-direction: row;
  `;
  const AuthorImage = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 100px;
    margin-right: 10px;
  `;

  const AuthorButton = styled.TouchableOpacity``;
  const AuthorTextBig = styled.Text`
    font-weight: 600;
    color: black;

    font-size: 16px;
  `;
  //#endregion
  //#region Body
  const CardBody = styled.View`
    width: 100%;
    height: 80%;
  `;
  const Img = styled.Image`
    width: 100%;
    height: 60%;
  `;
  const CardFeatures = styled.View`
    height: 7%;
    flex-direction: row;
    align-items: center;
    width: 95%;
    margin: 0 auto;
  `;
  const FeatureButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
    width: 30px;
    height: 50px;
  `;

  const CardContent = styled.View`
    height: auto;
    width: 95%;
    margin: 0 auto;
  `;
  const LikeContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 5px 0;
  `;
  const LikeText = styled.Text``;
  const AuthorTextSmall = styled.Text`
    margin: 0 5px;
    font-weight: bold;
  `;
  const DescriptionText = styled.Text`
    margin-top: 5px;
  `;
  const CardComments = styled.View`
    height: auto;
    margin: 5px 0;
  `;
  const CommentButton = styled.TouchableOpacity`
    margin-bottom: 5px;
  `;
  const CommentRedirectText = styled.Text`
    color: gray;
    font-size: 13px;
  `;
  const Comment = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 3px 0;
  `;

  const CommentText = styled.Text`
    margin-left: 5px;
  `;

  const CommentAuthorText = styled.Text`
    font-weight: bold;
  `;
  //#endregion
  //#region Footer
  const CardFooter = styled.View`
    width: 95%;
    margin: 5px auto 10px auto;
    height: 3%;
  `;

  const TimeAgoText = styled.Text`
    color: gray;
  `;
  //#endregion

  return (
    <CardContainer>
      <CardHeader>
        <AuthorImage
          source={{
            uri:
              creator?.photoURL ||
              "https://cdn.pixabay.com/photo/2019/11/07/08/12/sea-4608198_640.jpg",
          }}
        />
        <AuthorButton>
          <AuthorTextBig>{creator?.username}</AuthorTextBig>
        </AuthorButton>
      </CardHeader>
      <CardBody>
        <Img
          source={{
            uri: item.image,
          }}
        />
        <CardFeatures>
          <FeatureButton>
            <EntIcon name="heart-outlined" color="#474646" size={28} />
          </FeatureButton>
          <FeatureButton>
            <FontIcon name="comment-o" color="#474646" size={26} />
          </FeatureButton>
          <FeatureButton>
            <FontIcon name="share" color="#474646" size={23} />
          </FeatureButton>
        </CardFeatures>
        <CardContent>
          <LikeContainer>
            <LikeText>Aimé par</LikeText>
            <AuthorButton>
              <AuthorTextSmall>morganeLartin</AuthorTextSmall>
            </AuthorButton>
            <LikeText>et 360 autres personnes</LikeText>
          </LikeContainer>
          <AuthorButton>
            <AuthorTextBig>{creator?.username}</AuthorTextBig>
          </AuthorButton>
          <DescriptionText>{item.content}</DescriptionText>
          <CardComments>
            <CommentButton>
              <CommentRedirectText>Voir les commentaires</CommentRedirectText>
            </CommentButton>
            {item.comments?.length === 0 || item.comments === undefined ? (
              <Text style={tw`text-red-200`}>Pas encore de commentaires</Text>
            ) : (
              <>
                {item.comments?.map((comment, id) => (
                  <Comment key={id}>
                    <AuthorButton>
                      <CommentAuthorText>{comment?.userId}</CommentAuthorText>
                    </AuthorButton>
                    <CommentText>{comment?.text}</CommentText>
                  </Comment>
                ))}
              </>
            )}
          </CardComments>
          <View style={tw`flex-row items-center mb-5`}>
            <TextInput
              onSubmitEditing={handleComment}
              defaultValue={comment}
              onChangeText={(text) => setComment(text)}
              placeholder="entrez un commentaire"
              style={tw` flex-1`}
            />
            <TouchableOpacity
              style={tw`bg-black`}
              onPress={() => handleComment()}
            >
              <Text style={tw`text-white`}>Commenter</Text>
            </TouchableOpacity>
          </View>
        </CardContent>
      </CardBody>
      <CardFooter>
        <TimeAgoText>Il y a {item.timestamp.seconds}</TimeAgoText>
      </CardFooter>
      <Divider orientation="horizontal" />
    </CardContainer>
  );
}

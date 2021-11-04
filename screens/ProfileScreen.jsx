import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { userPosts } from "../mockData";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const Container = styled.View`
    height: 100%;
    width: 100%;
    background: #fff;
  `;
  const HeaderName = styled.Text`
    margin-left: 20px;
    font-size: 23px;
    font-weight: bold;
  `;
  const MainContainer = styled.ScrollView`
    width: 100%;
  `;

  //#region Header
  const HeaderProfile = styled.View`
    width: 90%;
    margin: 0 auto;
    width: 100%;
    height: auto;
    padding: 10px;
  `;
  const TopContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
  `;
  const ProfileImage = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 100px;
    margin-right: 10px;
  `;
  const ProfileStats = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;
  const ProfileStatsWrapper = styled.View`
    margin-right: 20px;
  `;

  const ProfileStatsTextBold = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: 18px;
  `;

  const BottomContainer = styled.View`
    width: 100%;
    margin-top: 10px;
    padding-left: 5px;
  `;
  const ProfileTextBold = styled.Text`
    font-weight: bold;
    margin-bottom: 5px;
  `;

  const ProfileTextLight = styled.Text``;

  const ProfileStatsTextLight = styled.Text``;
  const ListItemContainer = styled.ScrollView`
    height: 100%;
    width: 100%;
  `;
  const ListItemButton = styled.TouchableOpacity`
    width: 50%;
    height: 200px;
  `;
  const ListItemImage = styled.Image`
    width: 100%;
    height: 100%;
  `;
  //#endregion

  useLayoutEffect(() => {
    navigation.setOptions({
      title: null,
      headerShadowVisible: false,
      headerLeft: () => <HeaderName>{auth.currentUser.displayName}</HeaderName>,
    });
  }, []);
  return (
    <Container>
      <MainContainer>
        <HeaderProfile>
          <TopContainer>
            <ProfileImage
              source={{
                uri: "https://images.unsplash.com/photo-1635955555211-c35ad305ff56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
              }}
            />
            <ProfileStats>
              <ProfileStatsWrapper>
                <ProfileStatsTextBold>8</ProfileStatsTextBold>
                <ProfileStatsTextLight>Publications</ProfileStatsTextLight>
              </ProfileStatsWrapper>
              <ProfileStatsWrapper>
                <ProfileStatsTextBold>3309</ProfileStatsTextBold>
                <ProfileStatsTextLight>Abonnés</ProfileStatsTextLight>
              </ProfileStatsWrapper>
              <ProfileStatsWrapper>
                <ProfileStatsTextBold>376</ProfileStatsTextBold>
                <ProfileStatsTextLight>Abonnements</ProfileStatsTextLight>
              </ProfileStatsWrapper>
            </ProfileStats>
          </TopContainer>
          <BottomContainer>
            <ProfileTextBold>Malet</ProfileTextBold>
            <ProfileTextLight>Reunion Island</ProfileTextLight>
          </BottomContainer>
        </HeaderProfile>
        <ListItemContainer
          contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
        >
          {userPosts.map((post) => (
            <ListItemButton key={post.id} activeOpacity={0.9}>
              <ListItemImage source={{ uri: post.img }} />
            </ListItemButton>
          ))}
        </ListItemContainer>
      </MainContainer>
    </Container>
  );
}

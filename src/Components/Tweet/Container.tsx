import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { ITweet } from "../../api/tweets";
import { TweetContent, ProfilePic, Username } from "./";

interface IContainerComp {
  tweet: ITweet;
}

const TweetComp = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;

export const Container: FunctionComponent<IContainerComp> = ({ tweet }) => (
  <TweetComp>
    <ProfilePic url={tweet.image} />
    <TextContainer>
      <Username name={tweet.username} />
      <TweetContent text={tweet.text} />
    </TextContainer>
  </TweetComp>
);

export default Container;

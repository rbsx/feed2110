import React, { FunctionComponent } from "react";

import { ITweet } from "../../api/tweets";
import { Container } from "./";

interface ITweetList {
  tweets: ITweet[];
}

export const List: FunctionComponent<ITweetList> = ({ tweets }) => (
  <>
    {tweets.length > 0
      ? tweets.map((tweet: ITweet, index) => (
          <Container key={`tweet_${index}`} tweet={tweet} />
        ))
      : "Loading tweets..."}
  </>
);

export default List;

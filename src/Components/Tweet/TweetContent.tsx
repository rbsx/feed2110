import React, { FunctionComponent } from "react";

interface ITweetContent {
  text: string;
}

export const TweetContent: FunctionComponent<ITweetContent> = ({ text }) => (
  <div>{text}</div>
);

export default TweetContent;

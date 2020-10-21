import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

import { getLatestTweets, resetTweets, ITweet } from "../api/tweets";
import { List } from "./Tweet";

interface ITweetState {
  list: ITweet[];
  timeStamp: number;
  initRequest: boolean;
  getTweets: boolean;
}

const Button = styled.button`
  background-color: rebeccapurple;
  color: white;
  margin-right: 1rem;
`;

export const Main: FunctionComponent = () => {
  const [tweets, setTweets] = useState<ITweetState>({
    list: [],
    timeStamp: Date.now(),
    initRequest: true,
    getTweets: false
  });
  useEffect(() => {
    let isProcessing = false;
    const count = 10;
    const updateTweetsIntervalFunc = setInterval(() => {
      (async () => {
        try {
          if (!isProcessing && tweets.getTweets) {
            isProcessing = true;
            const latestTweets = await getLatestTweets(
              count,
              tweets.initRequest ? null : tweets.timeStamp
            );
            if (latestTweets.length > 0) {
              setTweets((tweets) => ({
                ...tweets,
                list: [...latestTweets, ...tweets.list],
                timeStamp: latestTweets[0]?.timeStamp,
                initRequest: false
              }));
            }
          }
        } catch (e) {
          errorLoggingService(e);
        }
        isProcessing = false;
      })();
    }, 2000);
    return () => clearInterval(updateTweetsIntervalFunc);
  }, [tweets.list, tweets.getTweets]);
  const errorLoggingService = (e: Error) => {
    // log the error elseware
    console.log(e);
  };
  const handleResetApiClick = async () => {
    try {
      const reset = await resetTweets();
      if (reset.success) {
        setTweets({
          list: [],
          timeStamp: Date.now(),
          initRequest: true,
          getTweets: false
        });
      }
    } catch (e) {
      errorLoggingService(e);
    }
  };
  const handleGetTweetsClick = () => {
    setTweets((tweets) => ({
      ...tweets,
      getTweets: true
    }));
  };
  return (
    <>
      {!tweets.getTweets ? (
        <>
          <Button onClick={handleGetTweetsClick}>Get Tweets</Button>
          <Button onClick={handleResetApiClick}>Reset API</Button>
        </>
      ) : (
        <List tweets={tweets.list} />
      )}
    </>
  );
};

export default Main;

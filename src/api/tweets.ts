// bumble-twitter-interview.herokuapp.com/william-taylor
import request from "superagent";

export interface ITweet {
  image: string;
  username: string;
  text: string;
  id: number;
  timeStamp: number;
}

interface IResetTweets {
  success: boolean;
}

interface IQueryParams {
  count?: number;
  afterTime?: number;
}

export const getLatestTweets = (
  count: number,
  afterTime: number = null
): Promise<ITweet[]> => {
  const queryParams: IQueryParams = {
    ...(count && { count }),
    ...(afterTime && { afterTime })
  };
  return request
    .get("https://bumble-twitter-interview.herokuapp.com/william-taylor/api")
    .query(queryParams)
    .then((res) => res.body)
    .catch(() => {
      throw new Error("Failed to get tweets");
    });
};

export const resetTweets = (): Promise<IResetTweets> =>
  request
    .get("https://bumble-twitter-interview.herokuapp.com/william-taylor/reset")
    .then((res) => res.body)
    .catch(() => {
      throw new Error("Failed to reset tweets");
    });

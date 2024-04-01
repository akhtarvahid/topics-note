import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { TOPIC_API } from "../utils/constant";

// get all topicNotes
export const getRequest = async (url: RequestInfo | URL) => {
  return fetch(url, {
    method: "GET",
  }).then((res) => res.json());
};

export const useGetTopicNotes = () => {
  return useSWR(`${TOPIC_API}/sticky`, getRequest);
};

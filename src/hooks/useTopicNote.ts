import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { TOPIC_API } from "../utils/constant";

// create new topicNote
async function postRequest(url: RequestInfo | URL, { arg }: { arg: any }) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

export const usePostTopicNote = () => {
  const { data, trigger, isMutating, error } = useSWRMutation(
    `${TOPIC_API}/sticky`,
    postRequest
  );

  return {
    data,
    trigger,
    isMutating,
    error,
  };
};

// get all topicNotes
export const getRequest = async (url: RequestInfo | URL) => {
  return fetch(url, {
    method: "GET",
  }).then((res) => res.json());
};

export const useGetTopicNotes = () => {
  return useSWR(`${TOPIC_API}/sticky`, getRequest);
};

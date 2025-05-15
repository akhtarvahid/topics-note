import useSWR from "swr";
import useSWRMutation from "swr/mutation";

// create new topicNote
async function postRequest<T>(url: RequestInfo | URL, { arg }: { arg: T }) {
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
    `${process.env.REACT_APP_API_URL}/sticky`,
    postRequest,
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
  return useSWR(`${process.env.REACT_APP_API_URL}/sticky`, getRequest);
};

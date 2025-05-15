import { useOutletContext } from "react-router-dom";
import { TopicProps } from "../types";
export function useTopic() {
  return useOutletContext<TopicProps>();
}

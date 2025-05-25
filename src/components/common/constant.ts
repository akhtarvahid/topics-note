import { SimplifiedTopic } from "../../types/topic/topic.type";

export const sortingData = [
  { label: "Oldest First", value: "Oldest First" },
  { label: "Newest First", value: "Newest First" },
  { label: "Title", value: "title" },
];

export const sorters = (Topics: SimplifiedTopic[]) => {
  return {
    Title: (a: (typeof Topics)[0], b: (typeof Topics)[0]) =>
      a.title.localeCompare(b.title),

    "Newest First": (a: (typeof Topics)[0], b: (typeof Topics)[0]) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),

    "Oldest First": (a: (typeof Topics)[0], b: (typeof Topics)[0]) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  };
};

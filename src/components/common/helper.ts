import { Tag } from "../../types";
import { SimplifiedTopic } from "../../types/topic/topic.type";

export const colorGenerator = (): string => {
  return Math.floor(Math.random() * 16777215).toString(16);
};
export const formatDate = (
  dateString: string,
  includeTime?: boolean,
): string => {
  const tempDate = new Date(dateString);
  if (includeTime) {
    return tempDate.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const date = tempDate.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return date;
};

export const sortByTitle = (a: SimplifiedTopic, b: SimplifiedTopic) => {
  return a.title.localeCompare(b.title);
};

export const sortByNewestFirst = (a: SimplifiedTopic, b: SimplifiedTopic) => {
  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
};

export const sortByOldestFirst = (a: SimplifiedTopic, b: SimplifiedTopic) => {
  return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
};

export const filterTopics = (
  topic: SimplifiedTopic,
  title: string,
  selectedTags: Tag[],
) => {
  // Title filter
  if (title && !topic.title.toLowerCase().includes(title.toLowerCase())) {
    return false;
  }

  // Tags filter
  if (
    selectedTags.length > 0 &&
    !selectedTags.every((tag) =>
      topic.tags.some((topicTag) => topicTag.id === tag.id),
    )
  ) {
    return false;
  }

  return true;
};

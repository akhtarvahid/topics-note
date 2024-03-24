export type TopicProps = {
  id: string;
} & TopicData;

export type RawTopic = {
  id: string;
} & RawTopicData;

export type RawTopicData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type TopicData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

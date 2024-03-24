import { Tag, TopicData } from "../../types";
import { TopicForm } from "../TopicForm/TopicForm";
import { useTopic } from "../TopicLayout";

type EditTopicProps = {
  onSubmit: (id: string, data: TopicData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function EditTopic({
  onSubmit,
  onAddTag,
  availableTags,
}: EditTopicProps) {
  const Topic = useTopic();
  return (
    <>
      <h1 className="mb-4">Edit Topic</h1>
      <TopicForm
        title={Topic.title}
        markdown={Topic.markdown}
        tags={Topic.tags}
        onSubmit={(data) => onSubmit(Topic.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}

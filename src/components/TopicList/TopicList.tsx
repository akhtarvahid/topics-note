import { useMemo, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { Tag } from "../../types";
import TopicCard from "../TopicCard/TopicCard";
import EditTagsModal from "../EditTagsModal/EditTagsModal";
import { SimplifiedTopic } from "../../types/topic/topic.type";

type TopicListProps = {
  availableTags: Tag[];
  Topics: SimplifiedTopic[];
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
};

export function TopicList({
  availableTags,
  Topics,
  onUpdateTag,
  onDeleteTag,
}: TopicListProps) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");
  const [editTagsModalIsOpen, setEditTagsModalIsOpen] = useState(false);

  const filteredTopics = useMemo(() => {
    return Topics.filter((Topic) => {
      return (
        (title === "" ||
          Topic.title.toLowerCase().includes(title.toLowerCase())) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) =>
            Topic.tags.some((TopicTag) => TopicTag.id === tag.id),
          ))
      );
    });
  }, [title, selectedTags, Topics]);

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>Topics</h1>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to="/new">
              <Button variant="primary">Create</Button>
            </Link>
            <Button
              onClick={() => setEditTagsModalIsOpen(true)}
              variant="outline-secondary"
            >
              Edit Tags
            </Button>
            <Button variant="outline-secondary">Dark Mode</Button>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    }),
                  );
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {filteredTopics.map((Topic) => (
          <Col key={Topic.id}>
            <TopicCard
              id={Topic.id}
              title={Topic.title}
              tags={Topic.tags}
              createdAt={Topic.createdAt}
            />
          </Col>
        ))}
      </Row>
      <EditTagsModal
        onUpdateTag={onUpdateTag}
        onDeleteTag={onDeleteTag}
        show={editTagsModalIsOpen}
        handleClose={() => setEditTagsModalIsOpen(false)}
        availableTags={availableTags}
      />
    </>
  );
}

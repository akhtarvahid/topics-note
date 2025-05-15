import { Badge, Card, Stack } from "react-bootstrap";
import { colorGenerator, formatDate } from "../common/helper";
import { Link } from "react-router-dom";
import styles from "../TopicList/TopicList.module.css";
import { SimplifiedTopic } from "../../types/topic/topic.type";
import { useMemo } from "react";

export default function TopicCard({
  id,
  title,
  tags,
  createdAt,
}: SimplifiedTopic) {
  const color = useMemo(() => colorGenerator(), []);
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
      style={{ backgroundColor: `#${color}` }}
    >
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-3">{title}</span>
          {tags.length > 0 && (
            <Stack
              gap={1}
              direction="horizontal"
              className="justify-content-center flex-wrap"
            >
              {tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
          <Card.Text className="createdAt">
            {formatDate(createdAt?.toString())}
          </Card.Text>
        </Stack>
      </Card.Body>
    </Card>
  );
}

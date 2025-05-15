import { Navigate, Outlet, useParams } from "react-router-dom";
import { TopicProps } from "../types";

type TopicLayoutProps = {
  Topics: TopicProps[];
};

export function TopicLayout({ Topics }: TopicLayoutProps) {
  const { id } = useParams();
  const Topic = Topics.find((n) => n.id === id);

  if (Topic == null) return <Navigate to="/" replace />;

  return <Outlet context={Topic} />;
}

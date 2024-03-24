import "bootstrap/dist/css/bootstrap.min.css"
import { useMemo } from "react"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import { TopicList } from "./TopicList/TopicList"
import { TopicLayout } from "./TopicLayout"
import { Topic } from "./Topic"
import { EditTopic } from "./EditTopic/EditTopic"
import { TopicForm } from "./TopicForm"
import { useLocalStorage } from "../hooks"
import { RawTopic, Tag, TopicData } from "../types"

function App() {
  const [Topics, setTopics] = useLocalStorage<RawTopic[]>("TOPICS", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  const TopicsWithTags = useMemo(() => {
    return Topics.map(Topic => {
      return { ...Topic, tags: tags.filter(tag => Topic.tagIds.includes(tag.id)) }
    })
  }, [Topics, tags])

  function onCreateTopic({ tags, ...data }: TopicData) {
    setTopics(prevTopics => {
      return [
        ...prevTopics,
        { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) },
      ]
    })
  }

  function onUpdateTopic(id: string, { tags, ...data }: TopicData) {
    setTopics(prevTopics => {
      return prevTopics.map(Topic => {
        if (Topic.id === id) {
          return { ...Topic, ...data, tagIds: tags.map(tag => tag.id) }
        } else {
          return Topic
        }
      })
    })
  }

  function onDeleteTopic(id: string) {
    setTopics(prevTopics => {
      return prevTopics.filter(Topic => Topic.id !== id)
    })
  }

  function addTag(tag: Tag) {
    setTags(prev => [...prev, tag])
  }

  function updateTag(id: string, label: string) {
    setTags(prevTags => {
      return prevTags.map(tag => {
        if (tag.id === id) {
          return { ...tag, label }
        } else {
          return tag
        }
      })
    })
  }

  function deleteTag(id: string) {
    setTags(prevTags => {
      return prevTags.filter(tag => tag.id !== id)
    })
  }

  return (
    <Container className="my-4">
      <Routes>
        <Route
          path="/"
          element={
            <TopicList
              Topics={TopicsWithTags}
              availableTags={tags}
              onUpdateTag={updateTag}
              onDeleteTag={deleteTag}
            />
          }
        />
        <Route
          path="/new"
          element={
            <TopicForm
              onSubmit={onCreateTopic}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />
        <Route path="/:id" element={<TopicLayout Topics={TopicsWithTags} />}>
          <Route index element={<Topic onDelete={onDeleteTopic} />} />
          <Route
            path="edit"
            element={
              <EditTopic
                onSubmit={onUpdateTopic}
                onAddTag={addTag}
                availableTags={tags}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App

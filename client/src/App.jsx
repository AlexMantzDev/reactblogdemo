import { useState } from "react";
import { useEffect } from "react";
import { Container, Card } from "react-bootstrap";

import "./App.css";
import Post from "./components/Post/Post";
import PostForm from "./components/PostForm/PostForm";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const res = await fetch("/api/v1/posts/");
    const data = await res.json();
    setPosts(data);
  }

  async function handleSubmit(post) {
    try {
      const res = await fetch("/api/v1/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      await res.json();
      //fetch updated posts from server
      await getPosts();
    } catch (err) {
      console.log(err);
    }
  }

  async function deletePost(id) {
    try {
      const res = await fetch(`/api/v1/posts/${id}`, { method: "DELETE" });
      await res.json();
      await getPosts();
    } catch (err) {
      console.log(err);
    }
  }

  async function saveEdit(id, post) {
    try {
      const res = await fetch(`/api/v1/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      await res.json();
      await getPosts();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container className="my-4">
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Create a New Post</Card.Title>
          <PostForm
            onSubmit={handleSubmit}
            title={""}
            content={""}
            buttonText="Submit"
          />
        </Card.Body>
      </Card>

      {posts.map((post) => (
        <Post
          isEditMode={false}
          key={post._id}
          id={post._id}
          title={post.title}
          content={post.content}
          onDelete={deletePost}
          onSaveEdit={saveEdit}
        />
      ))}
    </Container>
  );
}

export default App;

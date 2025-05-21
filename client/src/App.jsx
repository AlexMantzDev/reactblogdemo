import { useState } from "react";
import "./App.css";
import Post from "./components/Post";
import { useEffect } from "react";
import PostForm from "./components/PostForm";

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

  return (
    <div>
      <PostForm onSubmit={handleSubmit}></PostForm>
      {posts.map((post) => {
        return (
          <Post key={post._id} title={post.title} content={post.content}></Post>
        );
      })}
    </div>
  );
}

export default App;

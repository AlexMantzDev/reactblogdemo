import { useState } from "react";
import "./App.css";
import Post from "./components/Post";
import { useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("/api/v1/posts/");
      const data = await res.json();
      console.log(data);
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <Post key={post._id} title={post.title} content={post.content}></Post>
        );
      })}
    </div>
  );
}

export default App;

import { useState } from "react";

function PostForm(props) {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewPost((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function submitForm() {
    props.onSubmit(newPost);
    setNewPost({ title: "", content: "" });
  }

  return (
    <form className="form">
      <label htmlFor="title">Title:</label>
      <input
        name="title"
        id="title"
        onChange={handleChange}
        value={newPost.title}
      ></input>
      <label htmlFor="content">Content:</label>
      <textarea
        name="content"
        id="content"
        onChange={handleChange}
        value={newPost.content}
      ></textarea>
      <button type="button" onClick={submitForm}>
        Submit
      </button>
    </form>
  );
}

export default PostForm;

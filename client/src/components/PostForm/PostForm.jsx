import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

import "./PostForm.css";

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
    <Container className="my-4">
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            placeholder="Enter a title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="content"
            value={newPost.content}
            onChange={handleChange}
            placeholder="Write your content here"
          />
        </Form.Group>
        <div className="d-flex justify-content-end mt-3">
          <Button variant="primary" type="button" onClick={submitForm}>
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default PostForm;

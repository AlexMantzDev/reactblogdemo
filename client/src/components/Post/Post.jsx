import { useState } from "react";
import "./Post.css";
import { Card, Button } from "react-bootstrap";
import PostForm from "../PostForm/PostForm";

function Post(props) {
  const [isEditMode, setEditMode] = useState(props.isEditMode);

  function deletePost() {
    props.onDelete(props.id);
  }

  function toggleEdit() {
    setEditMode((prevState) => {
      return !prevState;
    });
  }

  function handleSubmit(post) {
    props.onSaveEdit(props.id, post);
    toggleEdit();
  }

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        {isEditMode === false ? (
          <>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.content}</Card.Text>
          </>
        ) : (
          <>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="danger" type="button" onClick={toggleEdit}>
                <i className="bi bi-x-lg"></i>
              </Button>
            </div>
            <PostForm
              onSubmit={handleSubmit}
              title={props.title}
              content={props.content}
              isEditMode={true}
              buttonText="Save"
            ></PostForm>
          </>
        )}
        <div className="d-flex justify-content-end mt-3">
          {!isEditMode && (
            <>
              <Button variant="primary" type="button" onClick={toggleEdit}>
                <i className="bi bi-pencil"></i>
              </Button>
              <Button variant="danger" type="button" onClick={deletePost}>
                <i className="bi bi-trash"></i>
              </Button>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Post;

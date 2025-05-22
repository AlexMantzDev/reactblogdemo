import "./Post.css";
import { Card, Button } from "react-bootstrap";

function Post(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <div className="d-flex justify-content-end mt-3">
          <Button variant="primary" type="button">
            <i className="bi bi-pencil"></i>
          </Button>
          <Button variant="danger" type="button" onClick={handleClick}>
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Post;

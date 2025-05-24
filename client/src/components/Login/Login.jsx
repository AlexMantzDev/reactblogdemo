import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { login } from "../../services/auth/auth.service";
import { useAuth } from "../../hooks/auth.hooks";
import { useState } from "react";

function Login(props) {
  const { setUser } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClose = () => {
    props.onClose();
  };

  const handleLogin = async () => {
    const res = await login({ email, password });
    if (res.ok) {
      const user = await res.json();
      setUser(user);
    }
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    const password = value;
    setPassword(password);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    const email = value;
    setEmail(email);
  };

  return (
    <Modal show={props.show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Login;

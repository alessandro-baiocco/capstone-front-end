import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getUserToken } from "../redux/action";

const LogPage = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [user, setUser] = useState({ userName: "", password: "" });
  const handleChange = (propertyName, propertyValue) => {
    setUser({ ...user, [propertyName]: propertyValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.userName !== "" || user.password !== "") {
      dispatch(getUserToken(user));
      console.log(user);
    } else {
      setErrorText("per favore compila i campi neccesari ");
      setError(true);
    }
  };

  return (
    <Container
      fluid
      style={{
        backgroundImage:
          "url(https://as2.ftcdn.net/v2/jpg/05/91/90/95/1000_F_591909533_UfNjf5M9QS1DgegeIgN60pTTIQyUUYqG.jpg)",
        objectFit: "cover",
        height: "calc(100vh - 56px)",
      }}
      className="p-5"
    >
      <Container
        className="text-light d-flex "
        style={{ backgroundColor: "rgb(36 112 222 / 32%)", border: "solid 3px #89C0F2" }}
      >
        <Row>
          <Col xs={12} md={5} className="p-0">
            <img src="https://i.ytimg.com/vi/dFfTH8xVOoo/maxresdefault.jpg" alt="entrance" className="img-fluid" />
          </Col>
          <Col xs={12} md={7} lg={7} className="d-flex flex-column">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">USERNAME</Form.Label>
              <Form.Control
                className="text-light bg-dark"
                type="text"
                size="lg"
                style={{ border: "solid 3px  #89C0F2" }}
                onChange={(e) => handleChange("userName", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">PASSWORD</Form.Label>
              <Form.Control
                className="text-light bg-dark"
                type="password"
                size="lg"
                style={{ border: "solid 3px  #89C0F2" }}
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </Form.Group>
            <Button
              style={{
                fontSize: "50px",
              }}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              ENTRA
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LogPage;

import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ERROR_FALSE, ERROR_TRUE, registerUser } from "../redux/action";
import { useNavigate } from "react-router";

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.content);
  const error = useSelector((state) => state.loading.error);
  const errorText = useSelector((state) => state.loading.errorText);
  const [user, setUser] = useState({ username: "", email: "", nome: "", cognome: "", password: "", notePersonali: "" });
  const handleChange = (propertyName, propertyValue) => {
    setUser({ ...user, [propertyName]: propertyValue });
  };
  const handleSubmit = (propertyName, propertyValue) => {
    if (user.nome !== "" && user.cognome !== "" && user.username !== "" && user.password !== "" && user.email !== "") {
      dispatch(registerUser(user));
    } else {
      dispatch({ type: ERROR_TRUE, payload: "per favore compila i campi necessari" });
    }
  };
  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Container
      fluid
      style={{
        backgroundImage:
          "url(https://as2.ftcdn.net/v2/jpg/05/91/90/95/1000_F_591909533_UfNjf5M9QS1DgegeIgN60pTTIQyUUYqG.jpg)",
        objectFit: "cover",
        minHeight: "calc(100vh - 56px)",
      }}
      className="p-5"
    >
      {error && (
        <Alert variant="danger" onClose={() => dispatch({ type: ERROR_FALSE, payload: false })} dismissible>
          <Alert.Heading>error!</Alert.Heading>
          <p>{errorText}</p>
        </Alert>
      )}
      <Container
        style={{
          backgroundColor: "rgb(36 112 222 / 32%)",
          border: "solid 3px #89C0F2",
        }}
        className="text-light"
      >
        <Row>
          <Col xs={12} md={5}>
            <p className="fw-bold text-light fs-2 mb-5 text-center">BENVENUTO!!!</p>
            <img
              src="https://as1.ftcdn.net/v2/jpg/04/34/08/54/1000_F_434085442_UmMLU7ok5ZTKiB87YgKWZqXbWunuQGnl.jpg"
              alt="register"
              className="img-fluid"
            />
            <Container className="d-flex p-3">
              <Button
                className="btn-primary text-light fw-bold"
                style={{ fontSize: "2rem", width: "100%", overflow: "hidden" }}
                onClick={() => handleSubmit()}
              >
                REGISTRATI
              </Button>
            </Container>
          </Col>
          <Col xs={12} md={7}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">USERNAME*</Form.Label>
              <Form.Control
                className="text-light bg-dark"
                type="text"
                size="lg"
                style={{ border: "solid 3px  #89C0F2" }}
                onChange={(e) => handleChange("username", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">EMAIL*</Form.Label>
              <Form.Control
                className="text-light bg-dark"
                type="email"
                size="lg"
                style={{ border: "solid 3px  #89C0F2" }}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">NOME*</Form.Label>
              <Form.Control
                className="text-light bg-dark"
                type="text"
                size="lg"
                style={{ border: "solid 3px  #89C0F2" }}
                onChange={(e) => handleChange("nome", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">COGNOME*</Form.Label>
              <Form.Control
                className="text-light bg-dark"
                type="text"
                size="lg"
                style={{ border: "solid 3px  #89C0F2" }}
                onChange={(e) => handleChange("cognome", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">PASSWORD*</Form.Label>
              <Form.Control
                className="text-light bg-dark"
                type="password"
                size="lg"
                style={{ border: "solid 3px  #89C0F2" }}
                onChange={(e) => handleChange("password", e.target.value)}
              />
              <Form.Label className="fw-bold mt-2">NOTE PERSONALI</Form.Label>
              <Form.Control
                className="text-light bg-dark"
                as="textarea"
                style={{ maxHeight: "100px", border: "solid 3px  #89C0F2" }}
                onChange={(e) => handleChange("notePersonali", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SignUpPage;

import { useState } from "react";
import { Alert, Button, Container, Form, Modal } from "react-bootstrap";

const ProfileInformations = () => {
  //compilazione campi
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [user, setUser] = useState({ username: "", email: "", nome: "", cognome: "", password: "", notePersonali: "" });
  const handleChange = (propertyName, propertyValue) => {
    setUser({ ...user, [propertyName]: propertyValue });
  };
  const handleSubmit = (propertyName, propertyValue) => {
    if (user.nome !== "" || user.cognome !== "" || user.username !== "" || user.password !== "" || user.email !== "") {
      //implementare logica da inviare al backend
      console.log(user);
      setUser({ username: "", email: "", nome: "", cognome: "", password: "", notePersonali: "" });
    } else {
      setErrorText("per favore compila i campi neccesari ");
      setError(true);
    }
  };
  //-----------------------------

  //modal
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  //-------------------------

  return (
    <>
      <Container className="d-flex p-0 mb-1">
        <p className="fw-bold text-light m-0 me-auto fs-3"> USERNAME</p>
        <Button className="btn-primary me-3" onClick={() => handleShow("lg-down")}>
          <i className="bi bi-gear-fill"></i>
        </Button>
      </Container>

      <p className="text-light m-0 mb-4 fs-3 me-3" style={{ border: "solid 3px  #89C0F2", backgroundColor: "black" }}>
        coso119
      </p>
      <p className="fw-bold text-light m-0 fs-3"> EMAIL</p>
      <p className="text-light m-0 mb-4 fs-3 me-3" style={{ border: "solid 3px  #89C0F2", backgroundColor: "black" }}>
        MARIOQUELLOVERO@VERO.it
      </p>
      <p className="fw-bold text-light m-0 fs-3"> NOME</p>
      <p className="text-light m-0 mb-4 fs-3 me-3" style={{ border: "solid 3px  #89C0F2", backgroundColor: "black" }}>
        MARIO
      </p>
      <p className="fw-bold text-light m-0 fs-3"> COGNOME</p>
      <p className="text-light m-0 mb-4 fs-3 me-3" style={{ border: "solid 3px  #89C0F2", backgroundColor: "black" }}>
        ROSSI
      </p>
      <p className="fw-bold text-light m-0 fs-3"> PASSWORD</p>
      <p className="text-light m-0 mb-4 fs-3 me-3" style={{ border: "solid 3px  #89C0F2", backgroundColor: "black" }}>
        *********
      </p>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} className="btn-close-white">
        <Modal.Header closeButton>
          <Modal.Title>impostazioni</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && (
            <Alert variant="danger" onClose={() => setError(false)} dismissible>
              <Alert.Heading>error!</Alert.Heading>
              <p>{errorText}</p>
            </Alert>
          )}
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">USERNAME*</Form.Label>
            <Form.Control
              type="text"
              size="lg"
              style={{ border: "solid 3px  #89C0F2" }}
              onChange={(e) => handleChange("username", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">EMAIL*</Form.Label>
            <Form.Control
              type="email"
              size="lg"
              style={{ border: "solid 3px  #89C0F2" }}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">NOME*</Form.Label>
            <Form.Control
              type="text"
              size="lg"
              style={{ border: "solid 3px  #89C0F2" }}
              onChange={(e) => handleChange("nome", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">COGNOME*</Form.Label>
            <Form.Control
              type="text"
              size="lg"
              style={{ border: "solid 3px  #89C0F2" }}
              onChange={(e) => handleChange("cognome", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">PASSWORD*</Form.Label>
            <Form.Control
              type="password"
              size="lg"
              style={{ border: "solid 3px  #89C0F2" }}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <Form.Label className="fw-bold mt-2">NOTE PERSONALI</Form.Label>
            <Form.Control
              as="textarea"
              style={{ maxHeight: "100px", border: "solid 3px  #89C0F2" }}
              onChange={(e) => handleChange("notePersonali", e.target.value)}
            />
          </Form.Group>
          <Button
            className="btn-light fw-bold"
            style={{ fontSize: "40px", width: "100%", border: "solid 3px  #89C0F2" }}
            onClick={() => handleSubmit()}
          >
            invia
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileInformations;

import { useState } from "react";
import { Button, Container, FloatingLabel, Form, Modal } from "react-bootstrap";

const ProfileInformations = () => {
  //modal
  const [show, setShow] = useState(true);
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
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">USERNAME</Form.Label>
            <Form.Control type="text" size="lg" style={{ border: "solid 3px  #89C0F2" }} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">EMAIL</Form.Label>
            <Form.Control type="email" size="lg" style={{ border: "solid 3px  #89C0F2" }} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">NOME</Form.Label>
            <Form.Control type="text" size="lg" style={{ border: "solid 3px  #89C0F2" }} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">COGNOME</Form.Label>
            <Form.Control type="text" size="lg" style={{ border: "solid 3px  #89C0F2" }} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">PASSWORD</Form.Label>
            <Form.Control type="password" size="lg" style={{ border: "solid 3px  #89C0F2" }} />
            <Form.Label className="fw-bold mt-2">NOTE PERSONALI</Form.Label>
            <Form.Control as="textarea" style={{ maxHeight: "100px", border: "solid 3px  #89C0F2" }} />
          </Form.Group>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileInformations;

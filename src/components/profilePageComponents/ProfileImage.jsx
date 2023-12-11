import { useState } from "react";
import { Alert, Button, Container, Form, Modal } from "react-bootstrap";

const ProfileImage = (props) => {
  //compilazione campi
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = () => {
    if (image !== null) {
      //implementare logica da inviare al backend
      console.log(image);
      setImage(null);
    } else {
      setErrorText("per favore inserisci un'immagine ");
      setError(true);
    }
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

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
      {" "}
      <p className="fs-2 text-light mb-0">IMMAGINE PROFILO</p>
      <Container className="p-0" style={{ position: "relative", width: "fit-content" }}>
        <img src={props.image} alt="my profile avatar" className="img-fluid" width={"400px"} />

        <Button
          className="p-1 py-0"
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            backgroundColor: "rgb(36 112 222 / 62%)",
            width: "fit-content",
          }}
          onClick={() => {
            handleShow("lg-down");
          }}
        >
          <i className="bi bi-pen text-light"></i>
        </Button>
      </Container>
      {/* ---------------modal------------------------------ */}
      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => {
          setShow(false);
          setImage(null);
        }}
      >
        {error && (
          <Alert
            variant="danger"
            onClose={() => {
              setError(false);
            }}
            dismissible
          >
            <Alert.Heading>error!</Alert.Heading>
            <p>{errorText}</p>
          </Alert>
        )}
        <Modal.Header closeButton className="bg-white" style={{ filter: "invert(1) grayscale(100%) brightness(200%)" }}>
          <Modal.Title>immagine</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black text-light">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <input
              type="file"
              autoFocus
              accept="image/*"
              onChange={(e) => onImageChange(e)}
              style={{
                filter: "invert(1) grayscale(100%) brightness(200%)",
              }}
              className="text-dark"
            />
            <Container className="notFilter my-2">
              {image && (
                <img
                  alt="preview"
                  src={image}
                  className="img-fluid my-2"
                  style={{
                    border: "solid 3px  white",
                  }}
                />
              )}
            </Container>
          </Form.Group>
          <Button
            className="fw-bold btn-light"
            style={{
              fontSize: "40px",
              width: "100%",
              border: "solid 3px  #89C0F2",
              filter: "invert(1) grayscale(100%) brightness(200%)",
            }}
            onClick={() => handleSubmit()}
          >
            invia
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileImage;

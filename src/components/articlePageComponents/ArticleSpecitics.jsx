import { useState } from "react";
import { Alert, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeimageArticle } from "../../redux/action";

const ArticleSpecitics = (props) => {
  //compilazione campi
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(null);
  const handleSubmit = () => {
    if (image !== null) {
      dispatch(changeimageArticle(props.token, image, props.article.id));
      //implementare logica da inviare al backend
      console.log(image);
      setImage(null);
      setPreview(null);
    } else {
      setErrorText("per favore inserisci un'immagine ");
      setError(true);
    }
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setPreview(URL.createObjectURL(event.target.files[0]));
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
      <Container>
        <Row>
          <Col xs={12} sm={7} lg={5} className="text-light p-0 borderRightToBottomSM">
            <Container className="p-0 px-3" style={{ borderBottom: "solid 3px #89C0F2", overflow: "auto" }}>
              <p
                className="text-center mb-0 fw-bold fs-4"
                style={{
                  wordWrap: "break-word",
                  lineHeight: "1.6rem",
                }}
              >
                TITOLO:
              </p>
              <p className="fs-4 m-0">{props.article.titolo}</p>
            </Container>
            <Container className="p-0 px-3" style={{ borderBottom: "solid 3px #89C0F2", overflow: "auto" }}>
              <p className="text-center mb-0 fw-bold fs-4">SVILUPPATORE:</p>
              <p className="fs-4 m-0">{props.article.svillupatore}</p>
            </Container>
            <Container className="p-0 px-3" style={{ borderBottom: "solid 3px #89C0F2", overflow: "auto" }}>
              <p className="text-center mb-0 fw-bold fs-4">PUBBLICAZIONE:</p>
              <p className="fs-4 m-0">{props.article.pubblicazione}</p>
            </Container>
            <Container className="p-0 px-3" style={{ borderBottom: "solid 3px #89C0F2", overflow: "auto" }}>
              <p className="text-center mb-0 fw-bold fs-4">TEMA:</p>
              <p className="fs-4 m-0">{props.article.tema}</p>
            </Container>
            <Container className="p-0 px-3">
              <p className="text-center mb-0 fw-bold fs-4">GENERE:</p>
              <ul className="p-0" style={{ listStyle: "none" }}>
                {props.article.genresList.map((genre, i) => (
                  <li className="fs-4 m-0" key={`list-item-${i}`}>
                    {genre}
                  </li>
                ))}
              </ul>
            </Container>
          </Col>
          <Col xs={12} sm={5} lg={7} className="p-0" style={{ minHeight: "400px", position: "relative" }}>
            <img
              src={props.article.immaginePrimaria}
              alt="cover"
              height={"100%"}
              width={"100%"}
              style={{ objectFit: "cover" }}
            />
            <Button
              className="p-1 py-0"
              style={{
                position: "absolute",
                right: "10px",
                top: "5px",
                backgroundColor: "rgb(36 112 222 / 62%)",
                width: "fit-content",
              }}
              onClick={() => {
                handleShow("lg-down");
              }}
            >
              <i className="bi bi-pen text-light"></i>
            </Button>
          </Col>
        </Row>
      </Container>

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
                  src={preview}
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

export default ArticleSpecitics;

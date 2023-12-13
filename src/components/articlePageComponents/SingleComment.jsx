import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeComment, deleteComment } from "../../redux/action";

const SingleComment = (props) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(props.comment);

  //-----------------------put comment --------------------------
  const handleChange = (value) => {
    setComment({ ...comment, comment: value });
  };

  const handleSubmit = () => {
    if (comment.comment !== "") {
      dispatch(changeComment(comment, props.token));
    }
  };

  const [show, setShow] = useState(false);

  return (
    <>
      <Container fluid className=" my-4" style={{ borderBlock: "solid 3px #89C0F2" }}>
        <Row>
          <Col xs={2} className="p-0">
            <img src={props.comment.user?.avatar} alt="profile-avatar" width={"100%"} height={"100%"} />
          </Col>
          <Col xs={8}>
            <p className="fs-2 text-light fw-bold">{props.comment.user?.username}</p>
            <p className="fs-2 text-light">{props.comment.comment}</p>
          </Col>

          <Col xs={2}>
            {props.myProfile.id === props.comment.user.id && (
              <Button
                className="btn-primary fw-bold"
                style={{ fontSize: "1rem" }}
                onClick={() => {
                  setShow(true);
                }}
              >
                <i className="bi bi-gear-wide-connected"></i>
              </Button>
            )}
            {props.myProfile.id === props.comment.id ||
              (props.myProfile.ruolo === "ADMIN" && (
                <Button
                  className="btn-danger fw-bold"
                  style={{ fontSize: "1rem" }}
                  onClick={() => dispatch(deleteComment(props.comment.id, props.token))}
                >
                  <i className="bi bi-trash-fill"></i>
                </Button>
              ))}
          </Col>
        </Row>
      </Container>
      {/* ------------------------modale------------------------------ */}
      <Modal show={show} onHide={() => setShow(false)} className="btn-close-white">
        <Modal.Header closeButton>
          <Modal.Title>modifica il commento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={3}
                value={comment.comment}
                onChange={(e) => handleChange(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            chiudi
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            salva cambiamenti
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleComment;

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
      console.log(comment);
      dispatch(changeComment(comment, props.token));
    }
  };

  const [show, setShow] = useState(false);

  return (
    <>
      <Container fluid className=" my-4" style={{ borderBlock: "solid 3px #89C0F2", position: "relative" }}>
        <Row>
          <Col xs={4} md={3} lg={2} className="p-0">
            <img src={props.comment.user?.avatar} alt="profile-avatar" width={"100%"} height={"100%"} />
          </Col>
          <Col xs={8} md={9} lg={10}>
            <p className="fs-2 text-light fw-bold mb-0">@{props.comment.user?.username}</p>
            <p
              className="text-light"
              style={{
                fontSize: "1.6rem",
                wordWrap: "break-word",
                lineHeight: "1.6rem",
                height: "110px",
                overflowY: "auto",
              }}
            >
              {props.comment.comment}
            </p>
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

          <Col xs={1} className="d-flex" style={{ bottom: "0px", left: "0px" }}></Col>
        </Row>
      </Container>
      {/* ------------------------modale------------------------------ */}
      <Modal show={show} onHide={() => setShow(false)} className="btn-close-white">
        <Modal.Header closeButton>
          <Modal.Title>modifica il commento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ position: "relative" }}>
              <p style={{ position: "absolute", top: "16px", right: "3px" }}>{comment.comment.length}/200</p>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment.comment}
                maxLength={200}
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

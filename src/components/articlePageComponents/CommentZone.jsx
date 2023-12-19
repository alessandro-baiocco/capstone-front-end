import { useState } from "react";
import { Button, Col, Container, Form, Placeholder, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../redux/action";
import SingleComment from "./SingleComment";
import GhostIcon from "../GhostIcon";

const CommentZone = (props) => {
  const loading = useSelector((state) => state.loading.loading);
  const token = useSelector((state) => state.token.content);
  const myProfile = useSelector((state) => state.myProfile.content);
  const allComments = useSelector((state) => state.comments.content);
  const dispatch = useDispatch();
  const [myComment, setMyComment] = useState("");
  const handleSubmit = () => {
    if (myComment !== "") {
      dispatch(postComment({ blog: props.articleid, comment: myComment }, token));
      setMyComment("");
    }
  };

  return (
    <>
      <Container
        className="mt-4 p-0"
        style={{
          backgroundColor: "rgb(36 112 222 / 32%)",
          border: "solid 3px #89C0F2",
          maxHeight: "500px",
          overflowY: "auto",
        }}
      >
        {loading ? (
          <Container fluid className=" my-4" style={{ borderBlock: "solid 3px #89C0F2", position: "relative" }}>
            <Row>
              <Col xs={4} md={3} lg={2} className="p-0">
                <Spinner animation="grow" variant="info" style={{ width: "100%", height: "100%" }} />
              </Col>
              <Col xs={8} md={9} lg={10}>
                <p className="fs-2 text-light fw-bold mb-0">
                  <Placeholder xs={3} bg="primary" />
                </p>
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
                  {Array.from(Array(3).keys()).map((spinner, i) => (
                    <Placeholder xs={12} bg="primary" key={`placeholder-${i}`} />
                  ))}
                </p>
              </Col>

              <Col xs={1} className="d-flex" style={{ bottom: "0px", left: "0px" }}></Col>
            </Row>
          </Container>
        ) : allComments.length > 0 ? (
          allComments.map((comment, i) => {
            return <SingleComment comment={comment} myProfile={myProfile} token={token} key={`comment-${i}`} />;
          })
        ) : (
          <>
            <Container fluid className=" my-4" style={{ borderBlock: "solid 3px #89C0F2", position: "relative" }}>
              <Row>
                <Col xs={4} md={3} lg={2} className="p-0">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/06/81/26/62/1000_F_681266245_uhyUvnwDIm8ftIvD4qk3rdI90DmCH0aI.jpg"
                    alt="empty"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Col>
                <Col xs={8} md={9} lg={10}>
                  <p className="fs-2 text-light fw-bold mb-0">
                    <GhostIcon /> <GhostIcon /> <GhostIcon />
                  </p>
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
                    non ci sono commenti disponibili
                  </p>
                </Col>

                <Col xs={1} className="d-flex" style={{ bottom: "0px", left: "0px" }}></Col>
              </Row>
            </Container>
          </>
        )}
      </Container>
      <Container className="my-3" style={{ backgroundColor: "rgb(36 112 222 / 32%)", border: "solid 3px  #89C0F2" }}>
        <Row>
          <Col xs={2} className="p-0">
            <img src={myProfile.avatar} alt="profile-avatar" width={"100%"} height={"100%"} />
          </Col>
          <Col xs={10}>
            <Form.Group>
              <Form.Label className="fw-bold text-light fs-2">{myProfile.username}</Form.Label>
              <Form.Control
                as="textarea"
                style={{ backgroundColor: "rgb(36 112 222 / 32%)", maxHeight: "120px", border: "solid 3px  #89C0F2" }}
                onChange={(e) => setMyComment(e.target.value)}
                value={myComment}
                className="fw-bold text-light"
              />
              <Button
                className="btn-primary fw-bold"
                style={{ fontSize: "16px", border: "solid 3px  #89C0F2" }}
                onClick={() => handleSubmit()}
              >
                invia
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CommentZone;

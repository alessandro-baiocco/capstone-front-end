import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../redux/action";

const CommentZone = (props) => {
  const token = useSelector((state) => state.token.content);
  const myProfile = useSelector((state) => state.myProfile.content);
  const allComments = useSelector((state) => state.comments.content);
  const dispatch = useDispatch();
  const [myComment, setMyComment] = useState("");
  const handleSubmit = () => {
    if (myComment !== "") {
      dispatch(postComment({ blog: props.articleid, comment: myComment }, token));
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
        {allComments.map((comment, i) => {
          return (
            <Container fluid className=" my-4" style={{ borderBlock: "solid 3px #89C0F2" }} key={`comment-${i}`}>
              <Row>
                <Col xs={2} className="p-0">
                  <img src={comment.user?.avatar} alt="profile-avatar" width={"100%"} height={"100%"} />
                </Col>
                <Col xs={10}>
                  <p className="fs-2 text-light fw-bold">{comment.user?.username}</p>
                  <p className="fs-2 text-light">{comment.comment}</p>
                </Col>
              </Row>
            </Container>
          );
        })}
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

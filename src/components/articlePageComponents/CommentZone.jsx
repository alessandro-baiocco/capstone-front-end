import { Col, Container, Row } from "react-bootstrap";

const CommentZone = () => {
  return (
    <Container
      className="mt-4 p-0"
      style={{
        backgroundColor: "rgb(36 112 222 / 32%)",
        border: "solid 3px #89C0F2",
        maxHeight: "500px",
        overflowY: "auto",
      }}
    >
      {Array.from({ length: 12 }, () => Math.floor(Math.random() * 40)).map((comment) => {
        return (
          <Container fluid className="d-flex my-4" style={{ borderBlock: "solid 3px #89C0F2" }}>
            <Row>
              <Col xs={2}>
                <img
                  src="https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png"
                  alt="profile-avatar"
                  className="img-fluid"
                />
              </Col>
              <Col xs={10}>
                <p className="fs-2 text-light fw-bold">MARIO ROSSI</p>
                <p className="fs-2 text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien orci, pulvinar in dictum
                  vel, egestas sed tellus. Ut ullamcorper.
                </p>
              </Col>
            </Row>
          </Container>
        );
      })}
    </Container>
  );
};
export default CommentZone;

import { Button, Col, Container, Row } from "react-bootstrap";

const SingleUser = (props) => {
  return (
    <Container fluid className=" my-4" style={{ borderBlock: "solid 3px #89C0F2", position: "relative" }}>
      <Row>
        <Col xs={4} md={3} lg={2} className="p-0">
          <img src={props.user?.avatar} alt="profile-avatar" width={"100%"} height={"100%"} />
        </Col>
        <Col xs={8} md={9} lg={10}>
          <p className="fs-2 text-light fw-bold mb-0">@{props.user?.username}</p>
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
            {props.user?.ruolo}
          </p>
        </Col>

        <Col xs={1} className="d-flex" style={{ bottom: "0px", left: "0px" }}></Col>
      </Row>
    </Container>
  );
};

export default SingleUser;

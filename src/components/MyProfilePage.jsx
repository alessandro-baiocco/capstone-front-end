import { Col, Container, Row } from "react-bootstrap";
import ProfileImage from "./profilePageComponents/ProfileImage";
import ProfileInformations from "./profilePageComponents/ProfileInformations";

const MyProfilePage = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage:
            "url(https://as2.ftcdn.net/v2/jpg/05/91/90/95/1000_F_591909533_UfNjf5M9QS1DgegeIgN60pTTIQyUUYqG.jpg)",
          objectFit: "cover",
        }}
        className="p-5"
      >
        <Container style={{ backgroundColor: "rgb(36 112 222 / 32%)", border: "solid 3px #89C0F2" }}>
          <Row>
            <Col
              xs={12}
              md={5}
              lg={4}
              className="justify-content-center d-flex flex-column p-3 "
              style={{ borderRight: "solid 3px #89C0F2" }}
            >
              <ProfileImage></ProfileImage>
            </Col>
            <Col xs={12} md={7} lg={8}>
              <ProfileInformations></ProfileInformations>
            </Col>
            <Col xs={12}></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default MyProfilePage;

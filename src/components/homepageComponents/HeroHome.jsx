import { Col, Container, Row } from "react-bootstrap";

const HeroHome = () => {
  return (
    <>
      <Container
        className="d-flex mb-4 p-0"
        style={{ backgroundColor: "rgb(36 112 222 / 32%)", border: "solid 3px #89C0F2" }}
      >
        <Row style={{ overflowY: "auto" }}>
          <Col xs={12} md={6} lg={4}>
            <img
              src="https://as1.ftcdn.net/v2/jpg/06/05/96/88/1000_F_605968863_q4Lgg1ORkE9CaruzO11eyWGaLeowO31a.jpg"
              alt="hero page"
              className="img-fluid"
            />
          </Col>
          <Col xs={12} md={6} lg={8}>
            <p className="text-light fw-bold pt-2" style={{ fontFamily: "Inter, sans-serif" }}>
              Benvenuto in questo splendido mondo di gaming e immaginazione. questo sito ti permettera di conoscere
              titoli che magari non avevi mai visto prima con tanto di recensioni e consigli su come giocarli (una
              specie di wiki insomma ma non dirlo a nessuno)avventurati pure a tuo rischio e pericolo.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroHome;

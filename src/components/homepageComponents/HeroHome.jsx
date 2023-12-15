import { Col, Container, Row } from "react-bootstrap";
import GhostIcon from "../GhostIcon";

const HeroHome = () => {
  return (
    <>
      <Container className="mb-4  " style={{ backgroundColor: "rgb(36 112 222 / 32%)", border: "solid 3px #89C0F2" }}>
        <Row>
          <Col xs={12} md={6} lg={4} className="p-0 borderRightToBottom">
            <img
              src="https://as1.ftcdn.net/v2/jpg/06/05/96/88/1000_F_605968863_q4Lgg1ORkE9CaruzO11eyWGaLeowO31a.jpg"
              alt="hero page"
              width={"100%"}
              height={"100%"}
            />
          </Col>
          <Col xs={12} md={6} lg={8} className="px-2" style={{ overflowY: "auto" }}>
            <p className="text-center fs-2 text-light">
              <GhostIcon /> <GhostIcon /> <GhostIcon /> <span className="mx-4 fw-bold"> Benvenuto in Games Center</span>
              <GhostIcon /> <GhostIcon /> <GhostIcon />{" "}
            </p>
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

import { Col, Container, Row } from "react-bootstrap";

const ArticleSpecitics = () => {
  return (
    <Container>
      <Row>
        <Col xs={5} className="text-light p-0">
          <Container className="p-0 px-3" style={{ borderBottom: "solid 3px #89C0F2" }}>
            <p className="text-center mb-0 fw-bold fs-4">TITOLO:</p>
            <p className="fs-4 m-0">Doom</p>
          </Container>
          <Container className="p-0 px-3" style={{ borderBottom: "solid 3px #89C0F2" }}>
            <p className="text-center mb-0 fw-bold fs-4">SVILUPPATORE:</p>
            <p className="fs-4 m-0">ID SOFTWARE</p>
          </Container>
          <Container className="p-0 px-3" style={{ borderBottom: "solid 3px #89C0F2" }}>
            <p className="text-center mb-0 fw-bold fs-4">PUBBLICAZIONE:</p>
            <p className="fs-4 m-0">ID SOFTWARE</p>
          </Container>
          <Container className="p-0 px-3" style={{ borderBottom: "solid 3px #89C0F2" }}>
            <p className="text-center mb-0 fw-bold fs-4">TEMA:</p>
            <p className="fs-4 m-0">FANTASCIENTIFICO</p>
          </Container>
          <Container className="p-0 px-3">
            <p className="text-center mb-0 fw-bold fs-4">GENERE:</p>
            <p className="fs-4 m-0">SPARATUTTO , RETRO , OLD SCHOOL</p>
          </Container>
        </Col>
        <Col xs={7} className="p-0" style={{ minHeight: "400px" }}>
          <img
            src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_DOOM1993_image1600w.jpg"
            alt="cover"
            height={"100%"}
            width={"100%"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleSpecitics;

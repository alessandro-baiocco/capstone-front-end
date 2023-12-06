import { Col, Container, Row } from "react-bootstrap";
import ArticleCover from "./articlePageComponents/ArticleCover";
import ArticleStory from "./articlePageComponents/ArticleStory";
import ArticleSpecitics from "./articlePageComponents/ArticleSpecitics";
import ArticleEsperience from "./articlePageComponents/ArticleEsperience";
import ArticleSuggestion from "./articlePageComponents/ArticleSuggestion";
import CommentZone from "./articlePageComponents/CommentZone";

const ArticlePage = () => {
  return (
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
          <Col xs={12} style={{ borderBottom: "solid 3px #89C0F2" }} className="p-0">
            <ArticleCover></ArticleCover>
          </Col>
          <Col xs={12} md={6} style={{ borderRight: "solid 3px #89C0F2" }} className="p-0">
            <ArticleStory></ArticleStory>
          </Col>
          <Col xs={12} md={6} className="p-0">
            <ArticleSpecitics></ArticleSpecitics>
          </Col>
          <Col xs={12} className="p-0" style={{ borderTop: "solid 3px #89C0F2" }}>
            <ArticleEsperience></ArticleEsperience>
          </Col>
          <Col xs={12} className="p-0">
            <ArticleSuggestion></ArticleSuggestion>
          </Col>
        </Row>

        <p className="text-light" style={{ borderTop: "solid 3px #89C0F2" }}>
          <strong className="fw-bold">AUTORE ARTICOLO :</strong> mario rossi
        </p>
      </Container>

      <CommentZone></CommentZone>
    </Container>
  );
};

export default ArticlePage;

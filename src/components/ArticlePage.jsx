import { Alert, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import ArticleCover from "./articlePageComponents/ArticleCover";
import ArticleStory from "./articlePageComponents/ArticleStory";
import ArticleSpecitics from "./articlePageComponents/ArticleSpecitics";
import ArticleEsperience from "./articlePageComponents/ArticleEsperience";
import ArticleSuggestion from "./articlePageComponents/ArticleSuggestion";
import CommentZone from "./articlePageComponents/CommentZone";
import { useState } from "react";

const ArticlePage = () => {
  //compilazione campi
  const [remove, setRemove] = useState("");
  const [error, setError] = useState(false);
  const [generi, setGeneri] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [article, setArticle] = useState({
    titolo: "",
    svillupatore: "",
    pubblicazione: "",
    tema: "",
    genere: [],
    storia: "",
    esperienza: "",
    consigli: "",
    descrizione: "",
  });
  const handleChange = (propertyName, propertyValue) => {
    if (propertyName !== "genere") {
      setArticle({ ...article, [propertyName]: propertyValue });
    } else if (!article.genere.includes(propertyValue) && article.genere.length < 3) {
      article.genere.push(propertyValue);
      setGeneri([...generi, propertyValue]);
    } else if (!article.genere.includes(propertyValue) && article.genere.length > 2) {
      setErrorText("lista troppo lunga (massimo 3 generi)");
      setError(true);
    }
  };

  const handleRemove = (genre) => {
    article.genere.splice(article.genere.indexOf(genre), 1);
    generi.splice(generi.indexOf(genre), 1);
  };

  const handleSubmit = (propertyName, propertyValue) => {
    console.log(article);
    if (
      article.titolo !== "" &&
      article.svillupatore !== "" &&
      article.pubblicazione !== "" &&
      article.tema !== "" &&
      article.genere.length > 0 &&
      article.storia !== "" &&
      article.esperienza !== "" &&
      article.consigli !== "" &&
      article.descrizione !== ""
    ) {
      //implementare logica da inviare al backend
      console.log(article);
    } else {
      setErrorText("per favore compila i campi neccesari ");
      setError(true);
    }
  };
  //modal
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  //-------------------------
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
            <Col xs={12} className="p-0 d-flex" style={{ borderTop: "solid 3px #89C0F2" }}>
              <Container className=" d-flex">
                <p className="text-light p-1 me-auto my-0">
                  <strong className="fw-bold">AUTORE ARTICOLO :</strong> mario rossi
                </p>
                <Button className="btn-primary fw-bold mx-2" onClick={() => handleShow(true)}>
                  Modifica articolo
                </Button>
                <Button className="btn-danger fw-bold">elimina articolo</Button>
              </Container>
            </Col>
          </Row>
        </Container>

        <CommentZone></CommentZone>
      </Container>

      {/* --------------modal----------------- */}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} className="btn-close-white">
        <Modal.Header closeButton>
          <Modal.Title>impostazioni</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {error && (
              <Alert variant="danger" onClose={() => setError(false)} dismissible>
                <Alert.Heading>error!</Alert.Heading>
                <p>{errorText}</p>
              </Alert>
            )}
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">titolo</Form.Label>
                <Form.Control
                  type="text"
                  size="lg"
                  style={{ border: "solid 3px  #89C0F2" }}
                  onChange={(e) => handleChange("titolo", e.target.value)}
                  value={article.titolo}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">svillupatore</Form.Label>
                <Form.Control
                  type="text"
                  size="lg"
                  style={{ border: "solid 3px  #89C0F2" }}
                  onChange={(e) => handleChange("svillupatore", e.target.value)}
                  value={article.svillupatore}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">pubblicazione</Form.Label>

                <Form.Control
                  type="text"
                  size="lg"
                  style={{ border: "solid 3px  #89C0F2" }}
                  onChange={(e) => handleChange("pubblicazione", e.target.value)}
                  value={article.pubblicazione}
                />
              </Form.Group>
            </Col>{" "}
            <Col xs={12}>
              <Form.Group>
                <Form.Label className="fw-bold">tema</Form.Label>

                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    handleChange("tema", e.target.value);
                  }}
                  style={{ border: "solid 3px  #89C0F2" }}
                  size="lg"
                >
                  <option value="">seleziona un tema</option>
                  <option value="FANTASCIENTIFICO">FANTASCIENTIFICO</option>
                  <option value="FANTASY">FANTASY</option>
                  <option value="CONTEMPORANEO">CONTEMPORANEO</option>
                  <option value="STORICO">STORICO</option>
                  <option value="DISELPUNK">DISELPUNK</option>
                  <option value="BIOPUNK">BIOPUNK</option>
                  <option value="GUERRA">GUERRA</option>
                  <option value="WESTERN">WESTERN</option>
                  <option value="PREISTORIA">PREISTORIA</option>
                  <option value="POSTAPOCALITTICO">POSTAPOCALITTICO</option>
                  <option value="STORICO">STORICO</option>
                  <option value="FILM">FILM</option>
                  <option value="CARTONE">CARTONE</option>
                  <option value="FUMETTO">FUMETTO</option>
                </Form.Select>
              </Form.Group>{" "}
            </Col>{" "}
            <Form.Label className="fw-bold">genere</Form.Label>
            <Col xs={6} md={6}>
              <Form.Group className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    handleChange("genere", e.target.value);
                  }}
                  style={{ border: "solid 3px  #89C0F2" }}
                  multiple={true}
                  size="lg"
                >
                  <option value="SPARATUTTO">SPARATUTTO</option>
                  <option value="STRATEGICO">STRATEGICO</option>
                  <option value="AZIONE">AZIONE</option>
                  <option value="BROWSERGAME">BROWSERGAME</option>
                  <option value="ROUGELIKE">ROUGELIKE</option>
                  <option value="SOULSLIKE">SOULSLIKE</option>
                  <option value="GATCHA">GATCHA</option>
                  <option value="METROIDVANIA">METROIDVANIA</option>
                  <option value="OPENWORLD">OPENWORLD</option>
                  <option value="RETRO">RETRO</option>
                  <option value="PICCHIADURO">PICCHIADURO</option>
                  <option value="GIOCODIRUOLO">GIOCODIRUOLO</option>
                  <option value="TOWERDEFENSE">TOWERDEFENSE</option>
                  <option value="ZOMBIE">ZOMBIE</option>
                  <option value="MUSICALGAME">MUSICALGAME</option>
                  <option value="SPORTIVO">SPORTIVO</option>
                  <option value="PARTYGAME">PARTYGAME</option>
                  <option value="BATTLEROYALE">BATTLEROYALE</option>
                  <option value="ENIGMI">ENIGMI</option>
                  <option value="DUNGEONCRAWLER">DUNGEONCRAWLER</option>
                  <option value="GESTIONALE">GESTIONALE</option>
                  <option value="HACKANDSLASH">HACKANDSLASH</option>
                  <option value="OPENWORLD">OPENWORLD</option>
                  <option value="PVP">PVP</option>
                  <option value="PVEVP">PVEVP</option>
                  <option value="AVVENTURAGRAFICA">AVVENTURAGRAFICA</option>
                  <option value="SANDBOX">SANDBOX</option>
                  <option value="PLATFORM">PLATFORM</option>
                  <option value="SIMULATORE">SIMULATORE</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={6} md={6} className="d-flex mb-0 ">
              <ul style={{ listStyle: "none", border: "solid 3px  #89C0F2" }} className="p-0">
                {generi.map((genre, i) => {
                  return (
                    <li className="fw-bold" key={`list-item-${i}`}>
                      {genre}
                      <i
                        className="bi bi-x-circle mx-1"
                        onClick={(e) => {
                          handleRemove(genre);
                          setRemove(genre);
                        }}
                      ></i>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">storia</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ maxHeight: "100px", border: "solid 3px  #89C0F2" }}
                  onChange={(e) => handleChange("storia", e.target.value)}
                  value={article.storia}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold ">esperienza</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ maxHeight: "100px", border: "solid 3px  #89C0F2" }}
                  onChange={(e) => handleChange("esperienza", e.target.value)}
                  value={article.esperienza}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold ">consigli</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ maxHeight: "100px", border: "solid 3px  #89C0F2" }}
                  onChange={(e) => handleChange("consigli", e.target.value)}
                  value={article.consigli}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">breve descrizione</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ maxHeight: "100px", border: "solid 3px  #89C0F2" }}
                  onChange={(e) => handleChange("descrizione", e.target.value)}
                  value={article.descrizione}
                />
              </Form.Group>
            </Col>
            <Button
              className="btn-light fw-bold"
              style={{ fontSize: "40px", width: "100%", border: "solid 3px  #89C0F2" }}
              onClick={() => handleSubmit()}
            >
              invia
            </Button>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ArticlePage;

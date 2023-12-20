import { Alert, Button, Col, Container, Form, Modal, Placeholder, Row } from "react-bootstrap";
import ArticleCover from "./articlePageComponents/ArticleCover";
import ArticleStory from "./articlePageComponents/ArticleStory";
import ArticleSpecitics from "./articlePageComponents/ArticleSpecitics";
import ArticleEsperience from "./articlePageComponents/ArticleEsperience";
import ArticleSuggestion from "./articlePageComponents/ArticleSuggestion";
import CommentZone from "./articlePageComponents/CommentZone";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ERROR_FALSE, deleteArticle, getArticle, putArticle } from "../redux/action";
import { useParams, useNavigate } from "react-router";
import GhostIcon from "./GhostIcon";

const ArticlePage = () => {
  const fetchedArticle = useSelector((state) => state.article.content);
  const token = useSelector((state) => state.token.content);
  const myProfile = useSelector((state) => state.myProfile.content);
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.loading.loading);
  const isError = useSelector((state) => state.loading.error);

  //compilazione campi
  const [remove, setRemove] = useState("");
  const [error, setError] = useState(false);
  const [generi, setGeneri] = useState(fetchedArticle?.genresList);
  const [errorText, setErrorText] = useState("");
  const [article, setArticle] = useState(fetchedArticle);
  const handleChange = (propertyName, propertyValue) => {
    if (propertyName !== "genresList") {
      setArticle({ ...article, [propertyName]: propertyValue });
    } else if (!article.genresList.includes(propertyValue) && article.genresList.length < 3) {
      article.genresList.push(propertyValue);
      setGeneri([...generi, propertyValue]);
    } else if (!article.genresList.includes(propertyValue) && article.genresList.length > 2) {
      setErrorText("lista troppo lunga (massimo 3 generi)");
      setError(true);
    }
  };

  const handleRemove = (genre) => {
    article.genresList.splice(article.genresList.indexOf(remove), 1);
    setGeneri(generi.filter((_, i) => i !== generi.indexOf(remove)));
  };

  const handleSubmit = (propertyName, propertyValue) => {
    console.log(article);
    if (
      article.titolo !== "" &&
      article.svillupatore !== "" &&
      article.pubblicazione !== "" &&
      article.tema !== "" &&
      article.genresList.length > 0 &&
      article.storia !== "" &&
      article.esperienza !== "" &&
      article.consigli !== ""
    ) {
      dispatch(putArticle(fetchedArticle.id, article, token));
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

  //-----------------------------------
  useEffect(() => {
    dispatch(getArticle(param.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //--------------------------------
  const handleDelete = () => {
    const isOk = window.confirm("sei sicuro di voler eliminare questo articolo ?");
    if (isOk) {
      dispatch(deleteArticle(fetchedArticle.id, token));
      navigate("/");
    }
  };
  //--------------------------------------------
  return (
    <>
      {isError && (
        <Alert variant="danger" onClose={() => dispatch({ type: ERROR_FALSE, payload: "" })} dismissible>
          <Alert.Heading>
            <GhostIcon /> <GhostIcon /> <GhostIcon />
          </Alert.Heading>
          <p>errore nel caricamento dell'articolo</p>
        </Alert>
      )}
      {fetchedArticle && (
        <Container
          fluid
          style={{
            backgroundImage:
              "url(https://as2.ftcdn.net/v2/jpg/05/91/90/95/1000_F_591909533_UfNjf5M9QS1DgegeIgN60pTTIQyUUYqG.jpg)",
            objectFit: "cover",
          }}
          className="p-sm-1 p-md-3 p-lg-5"
        >
          <Container style={{ backgroundColor: "rgb(36 112 222 / 32%)", border: "solid 3px #89C0F2" }}>
            <Row>
              <Col xs={12} style={{ borderBottom: "solid 3px #89C0F2" }} className="p-0">
                {isError && (
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/00/66/90/50/1000_F_66905006_93t1zUK90XCKwHsdXrlT2xJKqa4vV2bV.jpg"
                    alt="error"
                  />
                )}

                {loading ? (
                  <Container fluid className="p-0">
                    {" "}
                    <img
                      src="https://as2.ftcdn.net/v2/jpg/04/71/57/81/1000_F_471578161_KxnbqLUR4iq78bUKuWH6P9iTjEhmEww9.jpg"
                      alt="loading"
                      style={{ maxHeight: "100px", width: "100%", objectFit: "cover" }}
                    />
                  </Container>
                ) : (
                  <ArticleCover
                    image={fetchedArticle?.immagineSecondaria}
                    id={fetchedArticle?.id}
                    token={token}
                  ></ArticleCover>
                )}
              </Col>
              <Col xs={12} md={6} className="p-0 borderRightToBottom" style={{ overflow: "auto" }}>
                {!loading ? (
                  <ArticleStory storia={fetchedArticle?.storia}></ArticleStory>
                ) : (
                  Array.from(Array(8).keys()).map((spinner, i) => (
                    <Placeholder xs={12} bg="primary" key={`placeholder-${i}`} />
                  ))
                )}
              </Col>
              <Col xs={12} md={6} className="p-0" style={{ overflow: "auto" }}>
                {isError && (
                  <Container fluid className="p-0">
                    <img
                      src="https://as1.ftcdn.net/v2/jpg/00/66/90/50/1000_F_66905006_93t1zUK90XCKwHsdXrlT2xJKqa4vV2bV.jpg"
                      alt="error"
                      style={{ height: "100%", width: "100%", objectFit: "cover" }}
                    />
                  </Container>
                )}

                {loading ? (
                  <Container fluid className="p-0">
                    {" "}
                    <img
                      src="https://as2.ftcdn.net/v2/jpg/04/71/57/81/1000_F_471578161_KxnbqLUR4iq78bUKuWH6P9iTjEhmEww9.jpg"
                      alt="loading"
                      style={{ height: "100%", width: "100%", objectFit: "cover" }}
                    />
                  </Container>
                ) : (
                  <ArticleSpecitics article={fetchedArticle} token={token}></ArticleSpecitics>
                )}
              </Col>
              <Col xs={12} className="p-0" style={{ borderTop: "solid 3px #89C0F2", overflow: "auto" }}>
                {!loading ? (
                  <ArticleEsperience esperienza={fetchedArticle?.esperienza}></ArticleEsperience>
                ) : (
                  Array.from(Array(3).keys()).map((spinner, i) => (
                    <Placeholder xs={12} bg="primary" key={`placeholder-${i}`} />
                  ))
                )}
              </Col>
              <Col xs={12} className="p-0" style={{ overflow: "auto" }}>
                {!loading ? (
                  <ArticleSuggestion consigli={fetchedArticle?.consigli}></ArticleSuggestion>
                ) : (
                  Array.from(Array(3).keys()).map((spinner, i) => (
                    <Placeholder xs={12} bg="primary" key={`placeholder-${i}`} />
                  ))
                )}
              </Col>
              <Col xs={12} className="p-0 d-flex" style={{ borderTop: "solid 3px #89C0F2", overflow: "auto" }}>
                {!loading ? (
                  <Container className=" d-flex flex-column flex-sm-row">
                    <p className="text-light p-1 me-auto my-0">
                      <strong className="fw-bold">AUTORE ARTICOLO :</strong>{" "}
                      {fetchedArticle?.user?.nome + " " + fetchedArticle?.user?.cognome}
                    </p>
                    {myProfile !== null && myProfile.username === article.user?.username && (
                      <Button
                        className="btn-primary fw-bold mx-sm-2"
                        onClick={() => {
                          handleShow(true);
                          setArticle(fetchedArticle);
                        }}
                      >
                        Modifica articolo
                      </Button>
                    )}
                    {myProfile !== null &&
                      (myProfile.username === article.user.username || myProfile.ruolo === "ADMIN") && (
                        <Button className="btn-danger fw-bold" onClick={() => handleDelete()}>
                          elimina articolo
                        </Button>
                      )}
                  </Container>
                ) : (
                  <Placeholder xs={12} />
                )}
              </Col>
            </Row>
          </Container>

          {myProfile !== null ? (
            <CommentZone comments={fetchedArticle?.comments} articleid={fetchedArticle?.id}></CommentZone>
          ) : (
            <Container
              className="mt-4 p-0"
              style={{
                backgroundColor: "rgb(36 112 222 / 32%)",
                border: "solid 3px #89C0F2",
                maxHeight: "500px",
                overflowY: "auto",
              }}
            >
              <p className="text-light fs-2 fw-bold">accedi per vedere i commenti </p>
            </Container>
          )}
        </Container>
      )}

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
                  style={{ border: "solid 3px #89C0F2" }}
                  onChange={(e) => handleChange("titolo", e.target.value)}
                  value={article?.titolo}
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
                  value={article?.svillupatore}
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
                  value={article?.pubblicazione}
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
                  value={article?.tema}
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
            <Form.Label className="fw-bold">generi</Form.Label>
            <Col xs={6} md={6}>
              <Form.Group className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    handleChange("genresList", e.target.value);
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
              <ul style={{ listStyle: "none", border: "solid 3px  #89C0F2", minWidth: "134px" }} className="p-0">
                {generi?.map((genre, i) => {
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
                  value={article?.storia}
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
                  value={article?.esperienza}
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
                  value={article?.consigli}
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

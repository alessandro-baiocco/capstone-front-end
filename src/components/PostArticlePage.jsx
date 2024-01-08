import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SUCCESS_FALSE, postArticle } from "../redux/action";
import { Link } from "react-router-dom";

const PostArticlePage = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.content);
  const success = useSelector((state) => state.loading.success);
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
      dispatch(postArticle(article, token));
      setArticle({
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
      setGeneri([]);
      setRemove("");
    } else {
      setErrorText("per favore compila i campi neccesari ");
      setError(true);
    }
  };
  //-----------------------------
  //refresh per genere
  useEffect((payload) => {}, [generi, remove]);

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
      {success && (
        <Alert variant="primary" dismissible onClose={() => dispatch({ type: SUCCESS_FALSE, payload: false })}>
          <Alert.Heading>molto bene</Alert.Heading>
          <p>
            il tuo articolo è stato postato con successo clicca <Link to="/">QUI</Link> per tornare alla pagina
            principale
          </p>
        </Alert>
      )}

      {error && (
        <Alert variant="danger" onClose={() => setError(false)} dismissible>
          <Alert.Heading>error!</Alert.Heading>
          <p>{errorText}</p>
        </Alert>
      )}
      <Container
        style={{
          backgroundColor: "rgb(36 112 222 / 32%)",
          border: "solid 3px #89C0F2",
        }}
        className="text-light"
      >
        <Row>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" style={{ position: "relative" }}>
              <p style={{ position: "absolute", top: "0px", right: "3px" }}>{article.titolo.length}/30</p>
              <Form.Label className="fw-bold">titolo</Form.Label>
              <Form.Control
                className="text-light bg-dark"
                type="text"
                size="lg"
                style={{ border: "solid 3px  #89C0F2" }}
                onChange={(e) => handleChange("titolo", e.target.value)}
                value={article.titolo}
                maxLength={30}
              />
            </Form.Group>
            <Form.Group className="mb-3" style={{ position: "relative" }}>
              <p style={{ position: "absolute", top: "0px", right: "3px" }}>{article.svillupatore.length}/30</p>
              <Form.Label className="fw-bold">svillupatore</Form.Label>
              <Form.Control
                className="text-light bg-dark"
                type="text"
                size="lg"
                style={{ border: "solid 3px  #89C0F2" }}
                onChange={(e) => handleChange("svillupatore", e.target.value)}
                value={article.svillupatore}
                maxLength={30}
              />
            </Form.Group>
            <Form.Group className="mb-3" style={{ position: "relative" }}>
              <p style={{ position: "absolute", top: "0px", right: "3px" }}>{article.pubblicazione.length}/30</p>
              <Form.Label className="fw-bold">pubblicazione</Form.Label>
              <Form.Control
                className="text-light bg-dark"
                type="text"
                size="lg"
                style={{ border: "solid 3px  #89C0F2" }}
                onChange={(e) => handleChange("pubblicazione", e.target.value)}
                value={article.pubblicazione}
                maxLength={30}
              />
              <Form.Label className="fw-bold">tema</Form.Label>

              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  handleChange("tema", e.target.value);
                }}
                style={{ border: "solid 3px  #89C0F2" }}
                className="text-light bg-dark"
                size="lg"
              >
                <option value="">seleziona un tema</option>
                <option value="FANTASCIENTIFICO">FANTASCIENTIFICO</option>
                <option value="FANTASY">FANTASY</option>
                <option value="CONTEMPORANEO">CONTEMPORANEO</option>
                <option value="HORROR">HORROR</option>
                <option value="STORICO">STORICO</option>
                <option value="DISELPUNK">DISELPUNK</option>
                <option value="BIOPUNK">BIOPUNK</option>
                <option value="GUERRA">GUERRA</option>
                <option value="WESTERN">WESTERN</option>
                <option value="PREISTORIA">PREISTORIA</option>
                <option value="POSTAPOCALITTICO">POST APOCALITTICO</option>
                <option value="STORICO">STORICO</option>
                <option value="FILM">FILM</option>
                <option value="CARTONE">CARTONE</option>
                <option value="FUMETTO">FUMETTO</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" style={{ position: "relative" }}>
              <Form.Label className="fw-bold">genere</Form.Label>
              <p style={{ position: "absolute", top: "0px", right: "3px" }}>{article.genere.length}/3</p>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  handleChange("genere", e.target.value);
                }}
                style={{ border: "solid 3px  #89C0F2" }}
                className="text-light bg-dark"
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
                <option value="GIOCODIRUOLO">GIOCO DI RUOLO</option>
                <option value="TOWERDEFENSE">TOWER DEFENSE</option>
                <option value="ZOMBIE">ZOMBIE</option>
                <option value="MUSICALGAME">MUSICAL GAME</option>
                <option value="SPORTIVO">SPORTIVO</option>
                <option value="PARTYGAME">PARTY GAME</option>
                <option value="BATTLEROYALE">BATTLE ROYALE</option>
                <option value="ENIGMI">ENIGMI</option>
                <option value="DUNGEONCRAWLER">DUNGEON CRAWLER</option>
                <option value="GESTIONALE">GESTIONALE</option>
                <option value="HACKANDSLASH">HACK AND SLASH</option>
                <option value="OPENWORLD">OPENWORLD</option>
                <option value="PVP">PVP</option>
                <option value="PVEVP">PVEVP</option>
                <option value="AVVENTURAGRAFICA">AVVENTURA GRAFICA</option>
                <option value="SANDBOX">SANDBOX</option>
                <option value="PLATFORM">PLATFORM</option>
                <option value="SIMULATORE">SIMULATORE</option>
              </Form.Select>
            </Form.Group>
            <ul
              className="d-flex p-0 flex-column flex-md-row"
              style={{ listStyle: "none", minHeight: "30px", border: "solid 3px  #89C0F2" }}
            >
              {generi.map((genre, i) => {
                return (
                  <li className="mx-2 fw-bold" key={`list-item-${i}`} style={{}}>
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
          <Col xs={12} md={6}>
            <img
              src="https://averagelinuxuser.com/assets/images/posts/2019-01-18-linux-terminal-color/11-3-800x450.jpg"
              alt="register"
              height={"100%"}
              width={"100%"}
              style={{ objectFit: "cover" }}
            />
            <Container className="d-flex p-3"></Container>
          </Col>
          <Form.Group className="mb-3" style={{ position: "relative" }}>
            <p style={{ position: "absolute", top: "0px", right: "3px" }}>{article.storia.length}/900</p>
            <Form.Label className="fw-bold">storia</Form.Label>
            <Form.Control
              className="text-light bg-dark"
              as="textarea"
              style={{ height: "115px", border: "solid 3px  #89C0F2", resize: "none" }}
              onChange={(e) => handleChange("storia", e.target.value)}
              value={article.storia}
              maxLength={900}
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{ position: "relative" }}>
            <p style={{ position: "absolute", top: "0px", right: "3px" }}>{article.esperienza.length}/400</p>
            <Form.Label className="fw-bold mt-2">esperienza</Form.Label>
            <Form.Control
              className="text-light bg-dark"
              as="textarea"
              style={{ height: "90px", border: "solid 3px  #89C0F2", resize: "none" }}
              onChange={(e) => handleChange("esperienza", e.target.value)}
              value={article.esperienza}
              maxLength={400}
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{ position: "relative" }}>
            <p style={{ position: "absolute", top: "0px", right: "3px" }}>{article.consigli.length}/400</p>
            <Form.Label className="fw-bold mt-2">consigli</Form.Label>
            <Form.Control
              className="text-light bg-dark"
              as="textarea"
              style={{ mheight: "90px", border: "solid 3px  #89C0F2", resize: "none" }}
              onChange={(e) => handleChange("consigli", e.target.value)}
              value={article.consigli}
              maxLength={400}
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{ position: "relative" }}>
            <p style={{ position: "absolute", top: "0px", right: "3px" }}>{article.descrizione.length}/30</p>
            <Form.Label className="fw-bold mt-2">breve descrizione</Form.Label>
            <Form.Control
              className="text-light bg-dark"
              type="text"
              style={{ border: "solid 3px  #89C0F2" }}
              onChange={(e) => handleChange("descrizione", e.target.value)}
              value={article.descrizione}
              maxLength={30}
            />
          </Form.Group>
          <Button
            className="btn-light fw-bold"
            style={{ fontSize: "40px", width: "100%", border: "solid 3px  #89C0F2" }}
            onClick={() => handleSubmit()}
          >
            invia
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default PostArticlePage;

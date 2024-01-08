import { useState } from "react";
import { Alert, Button, Container, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { putUserProfile } from "../../redux/action";

const ProfileInformations = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.content);
  //compilazione campi
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [user, setUser] = useState(props.me);
  const handleChange = (propertyName, propertyValue) => {
    setUser({ ...user, [propertyName]: propertyValue });
  };
  const handleSubmit = (propertyName, propertyValue) => {
    if (user.nome?.length >= 3 && user.cognome?.length >= 3 && user.username?.length >= 3 && user.email?.length >= 3) {
      dispatch(putUserProfile(user, token));
      console.log(user);
    } else {
      console.log(user);
      setErrorText("per favore compila i campi neccesari ");
      setError(true);
    }
  };
  //-----------------------------

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
      <Container className="d-flex p-0 mb-1">
        <p className="fw-bold text-light m-0 me-auto fs-3"> USERNAME</p>
        <Button className="btn-primary me-3" onClick={() => handleShow("lg-down")}>
          <i className="bi bi-gear-fill"></i>
        </Button>
      </Container>

      <p
        className="text-light m-0 mb-4 fs-3 me-3"
        style={{ border: "solid 3px  #89C0F2", backgroundColor: "black", overflow: "auto" }}
      >
        {props.me.username}
      </p>
      <p className="fw-bold text-light m-0 fs-3"> EMAIL</p>
      <p
        className="text-light m-0 mb-4 fs-3 me-3"
        style={{ border: "solid 3px  #89C0F2", backgroundColor: "black", overflow: "auto" }}
      >
        {props.me.email}
      </p>
      <p className="fw-bold text-light m-0 fs-3"> NOME</p>
      <p
        className="text-light m-0 mb-4 fs-3 me-3"
        style={{ border: "solid 3px  #89C0F2", backgroundColor: "black", overflow: "auto" }}
      >
        {props.me.nome}
      </p>
      <p className="fw-bold text-light m-0 fs-3"> COGNOME</p>
      <p
        className="text-light m-0 mb-4 fs-3 me-3"
        style={{ border: "solid 3px  #89C0F2", backgroundColor: "black", overflow: "auto" }}
      >
        {props.me.cognome}
      </p>
      <p className="fw-bold text-light m-0 fs-3"> RUOLO</p>
      <p
        className="text-light m-0 mb-4 fs-3 me-3"
        style={{ border: "solid 3px  #89C0F2", backgroundColor: "black", overflow: "auto" }}
      >
        {props.me.ruolo}
      </p>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} className="btn-close-white">
        <Modal.Header closeButton>
          <Modal.Title>Modifica Informazioni Utente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && (
            <Alert variant="danger" onClose={() => setError(false)} dismissible>
              <Alert.Heading>error!</Alert.Heading>
              <p>{errorText}</p>
            </Alert>
          )}
          <Form.Group className="mb-3" style={{ position: "relative" }}>
            <Form.Label className="fw-bold">USERNAME*</Form.Label>
            <p style={{ position: "absolute", top: "0px", right: "3px" }}>{user.username?.length}/30</p>
            <Form.Control
              value={user.username}
              type="text"
              size="lg"
              style={{ border: "solid 3px  #89C0F2" }}
              maxLength={30}
              onChange={(e) => handleChange("username", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{ position: "relative" }}>
            <Form.Label className="fw-bold">EMAIL*</Form.Label>
            <Form.Control
              value={user.email}
              type="email"
              size="lg"
              style={{ border: "solid 3px  #89C0F2" }}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{ position: "relative" }}>
            <Form.Label className="fw-bold">NOME*</Form.Label>
            <p style={{ position: "absolute", top: "0px", right: "3px" }}>{user.nome?.length}/30</p>
            <Form.Control
              value={user.nome}
              type="text"
              size="lg"
              maxLength={30}
              style={{ border: "solid 3px  #89C0F2" }}
              onChange={(e) => handleChange("nome", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{ position: "relative" }}>
            <Form.Label className="fw-bold">COGNOME*</Form.Label>
            <p style={{ position: "absolute", top: "0px", right: "3px" }}>{user.cognome?.length}/30</p>
            <Form.Control
              value={user.cognome}
              type="text"
              size="lg"
              maxLength={30}
              style={{ border: "solid 3px  #89C0F2" }}
              onChange={(e) => handleChange("cognome", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{ position: "relative" }}>
            <Form.Label className="fw-bold mt-2">NOTE PERSONALI</Form.Label>
            <p style={{ position: "absolute", top: "0px", right: "3px" }}>{user.descrizione?.length}/30</p>
            <Form.Control
              value={user.descrizione}
              as="textarea"
              maxLength={30}
              style={{ resize: "none", border: "solid 3px  #89C0F2" }}
              onChange={(e) => handleChange("descrizione", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{ position: "relative" }}>
            <Form.Label className="fw-bold">GENERE PREFERITO</Form.Label>

            <Form.Select
              value={user.generePreferito ? user.generePreferito : ""}
              aria-label="Default select example"
              onChange={(e) => {
                handleChange("generePreferito", e.target.value);
              }}
              style={{ border: "solid 3px  #89C0F2" }}
              size="lg"
            >
              <option value="">Seleziona un genere</option>
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
          <Button
            className="btn-light fw-bold"
            style={{ fontSize: "40px", width: "100%", border: "solid 3px  #89C0F2" }}
            onClick={() => handleSubmit()}
          >
            invia
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileInformations;

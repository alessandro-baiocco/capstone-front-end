import { Button, Card, Col, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, putUserRole } from "../../redux/action";
import { useState } from "react";

const SingleUser = (props) => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile.content);
  const [ruolo, setRuolo] = useState({ role: props.user.ruolo });

  const handleDelete = () => {
    const confirm = window.confirm("sei sicuro di voler eliminare questo utente ?");
    if (confirm) {
      dispatch(deleteUser(props.token, props.user?.id));
    }
  };
  const handleChangeRole = () => {
    if (ruolo.role !== props.user.ruolo) {
      console.log(ruolo);
      dispatch(putUserRole(ruolo, props.token, props.user?.id));
    } else {
      console.log("non ha funzionato");
    }
  };

  return (
    <Col xs={12} md={4} lg={3}>
      <Card
        className=" my-4 text-light"
        style={{
          backgroundColor: "rgb(36 112 222 / 32%)",
          border: "solid 3px #89C0F2",
          position: "relative",
          minHeight: "483px",
        }}
      >
        <Card.Img variant="top" src={props.user?.avatar} style={{ maxHeight: "249px", objectFit: "cover" }} />
        <Card.Body>
          <Card.Title>@{props.user?.username}</Card.Title>
          {props.user.id !== myProfile.id ? (
            <Form.Select
              value={ruolo.role}
              style={{ border: "solid 3px  #89C0F2" }}
              className="bg-dark text-light fw-bold"
              size="lg"
              onChange={(e) => setRuolo({ role: e.target.value })}
            >
              <option value="USER">USER</option>
              <option value="CREATOR">CONTENT CREATOR</option>
              <option value="ADMIN">ADMIN</option>
            </Form.Select>
          ) : (
            <Card.Title> {props.user.ruolo}</Card.Title>
          )}
          <Card.Text>{props.user?.descrizione !== null ? props.user?.descrizione : "nessuna descrizione"}</Card.Text>
          {props.user.id !== myProfile.id ? (
            <Container className="d-flex flex-column">
              <Button variant="primary" className="my-2" onClick={() => handleChangeRole()}>
                cambia ruolo
              </Button>
              <Button variant="danger" onClick={() => handleDelete()}>
                ban hammer
              </Button>
            </Container>
          ) : (
            <Container className="p-0 fw-bold">
              <p>Questo è il tuo profilo</p>
            </Container>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleUser;

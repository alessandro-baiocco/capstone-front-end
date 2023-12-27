import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/action";

const SingleUser = (props) => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile.content);
  const handleDelete = () => {
    dispatch(deleteUser(props.token, props.user?.id));
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
          <Card.Title>{props.user?.ruolo}</Card.Title>
          <Card.Text>{props.user?.descrizione !== null ? props.user?.descrizione : "nessuna descrizione"}</Card.Text>
          {props.user.id !== myProfile.id ? (
            <Container className="d-flex flex-column">
              <Button variant="primary" className="my-2">
                promuovi
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

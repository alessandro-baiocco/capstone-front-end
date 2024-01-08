import { Alert, Button, Col, Container, Pagination, Placeholder, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GhostIcon from "../GhostIcon";
import { ERROR_FALSE } from "../../redux/action";

const MainPageCards = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const isError = useSelector((state) => state.loading.error);

  return (
    <Container style={{ backgroundColor: "rgb(36 112 222 / 32%)", border: "solid 3px #89C0F2" }}>
      <Container className="d-flex justify-content-center">
        <Pagination size="sm">{props.items}</Pagination>;
      </Container>

      {isError && (
        <Alert variant="danger" onClose={() => dispatch({ type: ERROR_FALSE, payload: "" })} dismissible>
          <Alert.Heading>
            <GhostIcon /> <GhostIcon /> <GhostIcon />
          </Alert.Heading>
          <p>errore nel caricamento delle cards</p>
        </Alert>
      )}
      <Row>
        {loading &&
          !isError &&
          Array.from(Array(8).keys()).map((spinner, i) => (
            <Col xs={12} md={4} lg={3} className="my-2" key={`spinner-${i}`}>
              <div
                className="card text-light text-center"
                style={{ backgroundColor: "rgba(0,0,0,0.70)", borderRadius: "30px", overflow: "hidden" }}
              >
                <Spinner animation="grow" variant="info" style={{ width: "100%", height: "260px" }} />
                <div className="card-body p-0">
                  <h5 className="card-title m-2" style={{ fontFamily: "Geostar Fill, serif" }}>
                    <Placeholder xs={12} bg="primary" />
                  </h5>
                  <hr className="text-light  border border-3 border-light opacity-100"></hr>
                  <p className="card-text m-2">
                    {" "}
                    <Placeholder xs={12} bg="primary" />
                  </p>
                  <hr className="text-light border border-3 border-light  opacity-100"></hr>
                  <p className="card-text m-2">
                    <Placeholder xs={12} bg="primary" />
                  </p>
                </div>
                <hr className="text-light border border-3 border-light  opacity-100"></hr>
                <div className="card-body d-flex justify-content-center pb-2 p-0 ">
                  <Link>
                    <Button className="btn btn-primary">leggi</Button>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        {!loading &&
          !isError &&
          props.cards?.content &&
          props.cards?.content.map((card, i) => {
            return (
              <Col xs={12} md={4} lg={3} className="my-2" key={`card-${i}`}>
                <div
                  className="card text-light text-center"
                  style={{ backgroundColor: "rgba(0,0,0,0.70)", borderRadius: "30px", overflow: "hidden" }}
                >
                  <img
                    src={card.cover}
                    className="card-img-top"
                    alt="title"
                    style={{ height: "382px", objectFit: "cover" }}
                  />
                  <div className="card-body p-0">
                    <h5
                      className="card-title m-2"
                      style={{ fontFamily: "Geostar Fill, serif", overflow: "hidden", height: "24px" }}
                    >
                      {card.titolo}
                    </h5>
                    <hr className="text-light  border border-3 border-light opacity-100"></hr>
                    <p className="card-text m-2"> {card.tema}</p>
                    <hr className="text-light border border-3 border-light  opacity-100"></hr>
                    <p className="card-text m-2">{card.description}</p>
                  </div>
                  <hr className="text-light border border-3 border-light  opacity-100"></hr>
                  <div className="card-body d-flex justify-content-center pb-2 p-0 ">
                    <Link to={`/article/${card.blogArticle?.id}`}>
                      <Button className="btn btn-primary">leggi</Button>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default MainPageCards;

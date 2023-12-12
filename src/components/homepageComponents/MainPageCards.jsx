import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainPageCards = (props) => {
  return (
    <Container style={{ backgroundColor: "rgb(36 112 222 / 32%)", border: "solid 3px #89C0F2" }}>
      <Row>
        {props.cards.content &&
          props.cards.content.map((card, i) => {
            return (
              <Col xs={12} md={4} lg={3} className="my-2" key={`card-${i}`}>
                <div
                  className="card text-light text-center"
                  style={{ backgroundColor: "rgba(0,0,0,0.70)", borderRadius: "30px", overflow: "hidden" }}
                >
                  <img src={card.cover} className="card-img-top" alt="title" />
                  <div className="card-body p-0">
                    <h5 className="card-title m-2" style={{ fontFamily: "Geostar Fill, serif" }}>
                      {card.titolo}
                    </h5>
                    <hr className="text-light  border border-3 border-light opacity-100"></hr>
                    <p className="card-text m-2"> {card.tema}</p>
                    <hr className="text-light border border-3 border-light  opacity-100"></hr>
                    <p className="card-text m-2">{card.description}</p>
                  </div>
                  <hr className="text-light border border-3 border-light  opacity-100"></hr>
                  <div className="card-body d-flex justify-content-center pb-2 p-0 ">
                    <Link to={`/article/${card.blogArticle.id}`}>
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

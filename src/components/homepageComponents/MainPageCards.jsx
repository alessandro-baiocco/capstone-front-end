import { Button, Col, Container, Row } from "react-bootstrap";

const MainPageCards = () => {
  return (
    <Container style={{ backgroundColor: "rgb(36 112 222 / 32%)", border: "solid 1rem #89C0F2" }}>
      <Row>
        {Array.from({ length: 12 }, () => Math.floor(Math.random() * 40)).map((card) => {
          return (
            <Col xs={12} md={4} lg={3} className="my-2">
              <div
                className="card text-light text-center"
                style={{ backgroundColor: "rgba(0,0,0,0.70)", borderRadius: "30px", overflow: "hidden" }}
              >
                <img
                  src="https://cdn1.epicgames.com/offer/149849cfbf324cc2a3d42fc4e5c19f91/EGS_DOOM1993_idSoftwareNerveSoftware_S1_2560x1440-8ed1ba59ae7bc26ccbafca2e7d05792b"
                  class="card-img-top"
                  alt="title"
                />
                <div class="card-body p-0">
                  <h5 class="card-title m-2" style={{ fontFamily: "Geostar Fill, serif" }}>
                    Card title
                  </h5>
                  <hr className="text-light  border border-3 border-light opacity-100"></hr>
                  <p class="card-text m-2">card genre</p>
                  <hr className="text-light border border-3 border-light  opacity-100"></hr>
                  <p class="card-text m-2">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <hr className="text-light border border-3 border-light  opacity-100"></hr>
                <div class="card-body d-flex justify-content-center pb-2 p-0 ">
                  <Button class="btn btn-primary">Go somewhere</Button>
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

import { Container } from "react-bootstrap";

const ProfileDescription = () => {
  return (
    <>
      <Container style={{ borderTop: "solid 3px  #89C0F2" }}>
        <p className="fw-bold text-light fs-2">Descrizione</p>
        <p className="text-light fs-3" style={{ border: "solid 3px  #89C0F2", minHeight: "199px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam lacus. Pellentesque et ante congue,
          scelerisque arcu in, lobortis libero. Nulla hendrerit orci nec condimentum condimentum
        </p>
      </Container>
      <p className="text-light fs-2">
        <span className="fw-bold text-light fs-2 ps-2">Genere preferito</span> : SPARATUTTO
      </p>
    </>
  );
};

export default ProfileDescription;

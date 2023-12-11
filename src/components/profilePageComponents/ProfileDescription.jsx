import { Container } from "react-bootstrap";

const ProfileDescription = (props) => {
  return (
    <>
      <Container style={{ borderTop: "solid 3px  #89C0F2" }}>
        <p className="fw-bold text-light fs-2">Descrizione</p>
        <p className="text-light fs-3" style={{ border: "solid 3px  #89C0F2", minHeight: "199px" }}>
          {props.me.descrizione ? props.me.descrizione : " nessuna descrizione"}
        </p>
      </Container>
      <p className="text-light fs-2">
        <span className="fw-bold text-light fs-2 ps-2">Genere preferito</span> :{" "}
        {props.me.genere ? props.me.genere : "nessun genere preferito"}
      </p>
    </>
  );
};

export default ProfileDescription;

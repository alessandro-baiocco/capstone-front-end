import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ME } from "../redux/action";

const MyNavBar = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile.content);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark text-light">
      <Container fluid className="text-light">
        <Link to="/" className="text-light">
          <img
            src="https://as1.ftcdn.net/v2/jpg/04/21/04/00/1000_F_421040029_lWiVrugJSwggCEJAT3Vem3WVMO8aQCn1.jpg"
            className="img-fluid"
            alt="logo"
            width={"50px"}
          />
        </Link>
        <p className="fw-bold fs-2 ms-2 mb-0">GAMES CENTER</p>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {myProfile ? (
            <>
              {" "}
              <Nav className="me-auto d-flex">
                <Link to="/profile/me" className="text-light text-decoration-none m-2 fw-bold">
                  Profilo
                </Link>
                {myProfile.ruolo !== "USER" && (
                  <Link to="/PostArticle" className="text-light text-decoration-none m-2 fw-bold me-auto">
                    Scrivi un'articolo
                  </Link>
                )}
                {myProfile.ruolo === "ADMIN" && (
                  <Link to="/users" className="text-light text-decoration-none m-2 fw-bold me-auto">
                    Lista utenti
                  </Link>
                )}
              </Nav>
              <Button className="btn-danger rounded me-2" onClick={() => dispatch({ type: REMOVE_ME, payload: null })}>
                <Link to="/" className="text-light text-decoration-none m-2 fw-bold">
                  disconnetti
                </Link>
              </Button>
              <p className="fw-bold fs-3 mb-0">BENVENUTO {myProfile.username} </p>
            </>
          ) : (
            <Nav className="ms-auto">
              <Button className="btn-primary rounded  me-2">
                <Link to="/register" className="text-light text-decoration-none m-2 fw-bold">
                  SIGN UP
                </Link>
              </Button>
              <Button className="btn-info rounded">
                <Link to="/log" className="text-light text-decoration-none m-2 fw-bold">
                  Log IN
                </Link>
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;

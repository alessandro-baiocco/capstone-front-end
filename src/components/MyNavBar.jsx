import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavBar = () => {
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex">
            <Link to="/MyProfile" className="text-light text-decoration-none m-2 fw-bold">
              Profilo
            </Link>
            <Link to="/PostArticle" className="text-light text-decoration-none m-2 fw-bold me-auto">
              scrivi un'articolo
            </Link>
          </Nav>
          <Nav>
            <Button className="btn-primary rounded me-2">
              <Link to="/registerPage" className="text-light text-decoration-none m-2 fw-bold">
                SIGN UP
              </Link>
            </Button>
            <Button className="btn-info rounded">
              <Link to="/logPage" className="text-light text-decoration-none m-2 fw-bold">
                Log IN
              </Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;

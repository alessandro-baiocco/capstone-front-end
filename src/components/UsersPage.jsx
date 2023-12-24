import { Container } from "react-bootstrap";
import UsersContainer from "./usersPage/UsersContainer";

const UsersPage = () => {
  return (
    <Container
      fluid
      style={{
        backgroundImage:
          "url(https://as2.ftcdn.net/v2/jpg/05/91/90/95/1000_F_591909533_UfNjf5M9QS1DgegeIgN60pTTIQyUUYqG.jpg)",
        objectFit: "cover",
        minHeight: "calc(100vh - 64px)",
      }}
      className="p-sm-1 p-md-3 p-lg-5"
    >
      <UsersContainer />
    </Container>
  );
};
export default UsersPage;

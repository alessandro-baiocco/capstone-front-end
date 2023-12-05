import { Container } from "react-bootstrap";
import HeroHome from "./homepageComponents/HeroHome";
import MainPageCards from "./homepageComponents/MainPageCards";

const MyHome = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage:
            "url(https://as2.ftcdn.net/v2/jpg/05/91/90/95/1000_F_591909533_UfNjf5M9QS1DgegeIgN60pTTIQyUUYqG.jpg)",
          objectFit: "cover",
        }}
        className="p-5"
      >
        <HeroHome></HeroHome>
        <MainPageCards></MainPageCards>
      </Container>
    </>
  );
};

export default MyHome;

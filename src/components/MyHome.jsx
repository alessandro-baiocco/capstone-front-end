import { Container, Pagination } from "react-bootstrap";
import HeroHome from "./homepageComponents/HeroHome";
import MainPageCards from "./homepageComponents/MainPageCards";

import { useDispatch, useSelector } from "react-redux";
import { getAllCards, getUserInformation } from "../redux/action";
import { useEffect, useState } from "react";

const MyHome = () => {
  //paginazione
  const numberPages = useSelector((state) => state.pagination.numberPages);
  const [active, setActive] = useState(1);
  let items = [];
  for (let number = 1; number <= numberPages; number++) {
    items.push(
      <Pagination.Item className="mt-2" key={number} active={number === active} onClick={() => setActive(number)}>
        {number}
      </Pagination.Item>
    );
  }

  //--------------------
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards?.content);
  const myProfile = useSelector((state) => state.myProfile.content);
  const token = useSelector((state) => state.token.content);
  useEffect(() => {
    dispatch(getAllCards(active - 1));
    if (token !== null && myProfile === null) {
      dispatch(getUserInformation("me", token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage:
            "url(https://as2.ftcdn.net/v2/jpg/05/91/90/95/1000_F_591909533_UfNjf5M9QS1DgegeIgN60pTTIQyUUYqG.jpg)",
          objectFit: "cover",
          minHeight: "calc(100vh - 64px)",
        }}
        className="p-5"
      >
        <HeroHome></HeroHome>

        <MainPageCards cards={cards} items={items}></MainPageCards>
      </Container>
    </>
  );
};

export default MyHome;

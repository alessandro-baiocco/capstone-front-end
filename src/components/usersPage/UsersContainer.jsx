import { useEffect, useState } from "react";
import { Container, Pagination, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/action";
import SingleUser from "./singleUser";

const UsersContainer = () => {
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
  const users = useSelector((state) => state.users.content);
  const token = useSelector((state) => state.token.content);

  useEffect(() => {
    dispatch(getAllUser(token, active - 1));
  }, [active]);

  return (
    <Container className="mb-4  p-0" style={{ backgroundColor: "rgb(36 112 222 / 32%)", border: "solid 3px #89C0F2" }}>
      <Pagination size="sm">{items}</Pagination>;
      <Row>{users && users.map((user, i) => <SingleUser user={user} key={`user-${i}`} token={token} />)}</Row>
    </Container>
  );
};

export default UsersContainer;

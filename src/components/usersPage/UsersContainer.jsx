import { useEffect, useState } from "react";
import { Alert, Container, Pagination, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SUCCESS_FALSE, getAllUser } from "../../redux/action";
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
  const success = useSelector((state) => state.loading.success);

  useEffect(() => {
    dispatch(getAllUser(token, active - 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <>
      {success && (
        <Alert variant="primary" dismissible onClose={() => dispatch({ type: SUCCESS_FALSE, payload: false })}>
          <Alert.Heading>molto bene</Alert.Heading>
          <p>il ruolo dell'utente è stato modificato con successo</p>
        </Alert>
      )}
      <Container
        className="mb-4  p-3"
        style={{ backgroundColor: "rgb(36 112 222 / 32%)", border: "solid 3px #89C0F2" }}
      >
        <p className="fs-2 text-light fw-bold text-center">UTENTI</p>
        <Pagination className="justify-content-center" size="sm">
          {items}
        </Pagination>
        ;<Row>{users && users.map((user, i) => <SingleUser user={user} key={`user-${i}`} token={token} />)}</Row>
      </Container>
    </>
  );
};

export default UsersContainer;

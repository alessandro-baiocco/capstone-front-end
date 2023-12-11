import { Col, Container, Row } from "react-bootstrap";
import ProfileImage from "./profilePageComponents/ProfileImage";
import ProfileInformations from "./profilePageComponents/ProfileInformations";
import ProfileDescription from "./profilePageComponents/ProfileDescription";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInformation } from "../redux/action";
import { useNavigate, useParams } from "react-router";

const MyProfilePage = () => {
  const navigate = useNavigate();
  const myProfile = useSelector((state) => state.myProfile.content);
  const token = useSelector((state) => state.token.content);
  const dispatch = useDispatch();
  const userId = useParams();

  useEffect(() => {
    if (myProfile === null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {console.log(myProfile)}
      <Container
        fluid
        style={{
          backgroundImage:
            "url(https://as2.ftcdn.net/v2/jpg/05/91/90/95/1000_F_591909533_UfNjf5M9QS1DgegeIgN60pTTIQyUUYqG.jpg)",
          objectFit: "cover",
        }}
        className="p-5"
      >
        <Container style={{ backgroundColor: "rgb(36 112 222 / 32%)", border: "solid 3px #89C0F2" }}>
          <Row>
            <Col xs={12} md={5} lg={4} className="p-3" style={{ borderRight: "solid 3px #89C0F2" }}>
              <ProfileImage image={myProfile.avatar}></ProfileImage>
            </Col>
            <Col xs={12} md={7} lg={8} className="pt-4">
              <ProfileInformations me={myProfile}></ProfileInformations>
            </Col>
            <Col xs={12} className="p-0">
              <ProfileDescription me={myProfile}></ProfileDescription>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default MyProfilePage;

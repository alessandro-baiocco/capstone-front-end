import { Container } from "react-bootstrap";

const ArticleStory = (props) => {
  return (
    <>
      <h2 className="text-light fs-1">STORIA</h2>
      <p className="text-light fw-bold" style={{ fontSize: "20px" }}>
        {props.storia}
      </p>
    </>
  );
};

export default ArticleStory;

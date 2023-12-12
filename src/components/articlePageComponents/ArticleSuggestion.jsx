const ArticleSuggestion = (props) => {
  return (
    <>
      <h2 className="text-light fs-1">I miei Consigli:</h2>
      <p className="text-light fw-bold" style={{ fontSize: "20px" }}>
        {props.consigli}
      </p>
    </>
  );
};

export default ArticleSuggestion;

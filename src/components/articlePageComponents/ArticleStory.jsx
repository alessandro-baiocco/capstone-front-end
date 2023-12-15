const ArticleStory = (props) => {
  return (
    <>
      <h2 className="text-light fs-1">STORIA</h2>
      <p className="text-light fw-bold" style={{ wordWrap: "break-word", lineHeight: "1.6rem", fontSize: "1.1rem" }}>
        {props.storia}
      </p>
    </>
  );
};

export default ArticleStory;

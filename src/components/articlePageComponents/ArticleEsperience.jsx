const ArticleEsperience = (props) => {
  return (
    <>
      <h2 className="text-light fs-1">La mia Esperienza di Gioco:</h2>
      <p className="text-light fw-bold" style={{ wordWrap: "break-word", lineHeight: "1.6rem", fontSize: "20px" }}>
        {props.esperienza}
      </p>
    </>
  );
};

export default ArticleEsperience;

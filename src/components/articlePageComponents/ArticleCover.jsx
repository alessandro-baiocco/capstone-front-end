import { Container } from "react-bootstrap";

const ArticleCover = () => {
  return (
    <img
      src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_DOOM1993_image1600w.jpg"
      alt="game-cover"
      className="img-fluid"
      style={{ maxHeight: "100px", width: "100%", objectFit: "cover" }}
    />
  );
};
export default ArticleCover;

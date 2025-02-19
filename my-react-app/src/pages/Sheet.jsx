import { useEffect } from "react";
import Slideshow from "../components/Slideshow";
import cards from "../../logements.json";
import { useNavigate, useParams } from "react-router-dom";
import Description from "../components/Description";

let backgrounds = [];
for (let i = 0; i < cards.length; i++) {
  backgrounds.push({
    pictures: cards[i].pictures,
  });
}

function Sheet() {
  window.scrollTo({ top: 0, behavior: "instant" });
  const listCards = Array.from(cards);
  const { idLogement } = useParams();
  const navigate = useNavigate();
  const logement = listCards.find((item) => item.id === idLogement);

  useEffect(() => {
    if (!logement) {
      navigate("/error404");
    }
  }, [logement, navigate]);

  return (
    <main>
      {logement && <Slideshow backgrounds={logement.pictures} />}
      <Description logementData={logement} />
    </main>
  );
}

export default Sheet;

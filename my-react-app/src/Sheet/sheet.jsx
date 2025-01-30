import Slideshow from "./Slideshow";
import cards from "../../logements.json";
import { useParams } from "react-router-dom";
import Description from "./Description";

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
  const logement = listCards.find((item) => item.id === idLogement);

  return (
    <main>
      {logement && <Slideshow backgrounds={logement.pictures} />}
      <Description logementData={logement} />
    </main>
  );
}

export default Sheet;

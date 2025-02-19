import cards from "../../logements.json";
import Banner from "../components/Banner";
import { Cards } from "../components/Cards";

function Home() {
  return (
    <main>
      <Banner
        title={"Chez vous, partout et ailleurs"}
        cover={"/./images/imghome.png"}
      />
      <section className="box-cards">
        {Object.keys(cards).map((index) => {
          const card = cards[index];
          return (
            <Cards
              key={card.id}
              title={card.title}
              cover={card.cover}
              id={card.id}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Home;

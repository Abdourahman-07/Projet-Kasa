import cards from "../../data.json";
import Banner from "./banner";
import Cards from "./Cards";

function Home() {
  return (
    <main>
      <Banner />
      <section className="box-cards">
        {Object.keys(cards).map((index) => {
          const card = cards[index];
          return <Cards key={card.id} title={card.title} cover={card.cover} />;
        })}
      </section>
    </main>
  );
}

export default Home;

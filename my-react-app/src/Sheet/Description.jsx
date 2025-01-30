import Collapse from "../Collapse";

/**
 * @param {object} logementData - objet regroupant toutes les caractéristiques du logement
 */
function Description({ logementData }) {
  let stateStars = [];
  for (let i = 0; i < logementData.rating; i++) {
    stateStars.push("filled-star");
  }

  return (
    <section className="description">
      <div className="header-description">
        <div className="titles">
          <h1>{logementData.title}</h1>
          <p>{logementData.location}</p>
        </div>
        <div className="host">
          <p>{logementData.host.name}</p>
          <img
            src={logementData.host.picture}
            alt="image de profil de l'hôte"
          />
        </div>
        <div className="tags">
          {logementData.tags.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))}
        </div>
        <div className="stars">
          <i className={`fa-solid fa-star ${stateStars[0]}`}></i>
          <i className={`fa-solid fa-star ${stateStars[1]}`}></i>
          <i className={`fa-solid fa-star ${stateStars[2]}`}></i>
          <i className={`fa-solid fa-star ${stateStars[3]}`}></i>
          <i className={`fa-solid fa-star ${stateStars[4]}`}></i>
        </div>
      </div>
      <div className="collapses">
        <Collapse title="Description" description={logementData.description} />
        <Collapse
          title="Équipements"
          description={logementData.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))}
        />
      </div>
    </section>
  );
}

export default Description;

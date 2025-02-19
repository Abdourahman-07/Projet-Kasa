import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled(Link)`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${(props) => props.$cover});
  background-size: cover;
  background-position: center;
`;

/**
 * @param {string} title - titre du logement
 * @param {string} cover - adresse web de l'image de fond
 * @param {number} id - identifiant simple du logement
 */
function Cards({ title, cover, id }) {
  return (
    <StyledCard
      id={`${id}`}
      className={"card"}
      $cover={cover}
      to={`/sheet/${id}`}
    >
      <h2>{title}</h2>
    </StyledCard>
  );
}

export { Cards };

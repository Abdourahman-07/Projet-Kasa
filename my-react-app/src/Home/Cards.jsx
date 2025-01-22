import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled(Link)`
  background: url(${(props) => props.$cover});
  background-size: cover;
  background-position: center;
`;

/**
 * @param {string} title - titre du logement
 * @param {string} cover - adresse web de l'image de fond
 */
function Cards({ title, cover }) {
  return (
    <StyledCard className="card" $cover={cover} to="/sheet">
      <h2>{title}</h2>
    </StyledCard>
  );
}

export default Cards;

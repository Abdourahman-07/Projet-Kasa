import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled(Link)`
  background: url(${(props) => props.$cover});
  background-size: cover;
  background-position: center;
`;

function Cards({ title, cover }) {
  return (
    <StyledCard className="card" $cover={cover} to="/sheet">
      <h2>{title}</h2>
    </StyledCard>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Cards;

import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: url(${(props) => props.$cover});
  background-size: cover;
  background-position: center;
`;

function Cards({ title, cover }) {
  return (
    <StyledDiv className="card" $cover={cover}>
      <h2>{title}</h2>
    </StyledDiv>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Cards;

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  padding: 20px;
  text-decoration: none;
  font-weight: 500;
`;

function Header() {
  return (
    <header>
      <img src="src/assets/logo.png" alt="Logo de l'agence" />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </nav>
    </header>
  );
}

export default Header;

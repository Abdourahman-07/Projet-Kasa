import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  padding: 20px;
  text-decoration: none;
  font-weight: 500;
`;

function Header() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <header>
      <img src="/public/images/logo.png" alt="Logo de l'agence" />
      <nav>
        <StyledLink
          className={currentPath === "/" ? "active" : "no-active"}
          to="/"
        >
          Accueil
        </StyledLink>
        <StyledLink
          className={currentPath === "/about" ? "active" : "no-active"}
          to="/about"
        >
          A Propos
        </StyledLink>
      </nav>
    </header>
  );
}

export default Header;

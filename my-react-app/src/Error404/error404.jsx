import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  margin: 100px 0px 80px 0px;
`;

function Error404() {
  return (
    <main className="main-error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <StyledLink to={"/"}>Retournez sur la page d&apos;accueil</StyledLink>
    </main>
  );
}

export default Error404;

import styled from "styled-components";
// L'utilisation de jsdoc est-elle correcte ?

const StyledBanner = styled.div`
  background: rgba(0, 0, 0, 0.6) url(${(props) => props.$cover});
  background-size: cover;
  background-blend-mode: darken;
`;

/**
 * @param {string} title - Titre de la bannière
 * @param {string} cover - Chemin relatif de l'image de fond
 */
function Banner({ title, cover }) {
  return (
    <StyledBanner className="banner" $cover={cover}>
      <h1>{title}</h1>
    </StyledBanner>
  );
}

export default Banner;

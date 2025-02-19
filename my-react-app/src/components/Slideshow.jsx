import { useState, useEffect } from "react";
import { styled } from "styled-components";

const StyledSection = styled.section`
  background: url(${(props) => props.$backgroundUrl});
  background-size: cover;
  background-position: center;
`;

/**
 * @param {array} backgrounds - tableau d'images pour l'arrière-plan de la fiche actuelle
 */
function Slideshow({ backgrounds }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [backgroundUrl, setBackgroundUrl] = useState(backgrounds[currentImage]);
  useEffect(() => {
    setBackgroundUrl(backgrounds[currentImage]);
  }, [currentImage, backgrounds]);

  function moveSlider(direction, backgrounds) {
    if (direction === "left") {
      if (currentImage !== 0) {
        setCurrentImage(currentImage - 1);
      } else {
        setCurrentImage(backgrounds.length - 1);
      }
    } else {
      if (currentImage !== backgrounds.length - 1) {
        setCurrentImage(currentImage + 1);
      } else {
        setCurrentImage(0);
      }
    }
    setBackgroundUrl(backgrounds[currentImage]);
  }

  return (
    <StyledSection className="slide-show" $backgroundUrl={backgroundUrl}>
      {backgrounds.length > 1 && (
        <>
          {" "}
          <i
            className={`fa-solid fa-chevron-left`}
            onClick={() => moveSlider("left", backgrounds)}
          ></i>
          <i
            className={`fa-solid fa-chevron-right`}
            onClick={() => moveSlider("right", backgrounds)}
          ></i>
          <p>
            {currentImage + 1}/{backgrounds.length}
          </p>
        </>
      )}
    </StyledSection>
  );
}

export default Slideshow;

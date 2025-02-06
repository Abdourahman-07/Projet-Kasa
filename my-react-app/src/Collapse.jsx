import { useState, useRef, useEffect } from "react";

/**
 * @param {string} title - titre de la collapse
 * @param {string} description - description de la collapse
 */
function Collapse({ title, description }) {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("60px");
  const [bottom, setBottom] = useState("0");

  useEffect(() => {
    if (isActive) {
      setMaxHeight(`${contentRef.current.scrollHeight + 60}px`);
      setBottom("0");
    } else {
      setMaxHeight("60px");
      setBottom(`${contentRef.current.scrollHeight}px`);
    }
  }, [isActive]);

  const toggleCollapse = () => {
    setIsActive(!isActive);
  };

  return (
    <section
      className={`collapse ${isActive ? "active" : ""}`}
      style={{
        maxHeight: maxHeight,
      }}
    >
      <div className="title-box">
        <h2>{title}</h2>
        <i
          className={`fa-solid fa-angle-up ${isActive ? "active" : ""}`}
          onClick={toggleCollapse}
        ></i>
      </div>
      <div
        className="content-box"
        ref={contentRef}
        style={{
          bottom: bottom,
        }}
      >
        <div>{description}</div>
      </div>
    </section>
  );
}

export default Collapse;

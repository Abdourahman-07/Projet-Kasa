import { useState } from "react";

/**
 *
 * @param {string} title - titre de la collapse
 * @param {string} description - description de la collapse
 */
function Collapse({ title, description }) {
  const [classIcone, setClassIcone] = useState("");
  const changeIcone = () => {
    setClassIcone(classIcone === "" ? "active" : "");
  };
  return (
    <section className="collapse">
      <div className="title-box">
        <h2>{title}</h2>
        <i
          className={`fa-solid fa-angle-up ${classIcone}`}
          onClick={changeIcone}
        ></i>
      </div>
      <div className={`content-box ${classIcone}-content`}>
        <div>{description}</div>
      </div>
    </section>
  );
}

export default Collapse;

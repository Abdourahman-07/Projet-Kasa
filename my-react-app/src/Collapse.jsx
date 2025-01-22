import { useState } from "react";

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
        <p>{description}</p>
      </div>
    </section>
  );
}

export default Collapse;

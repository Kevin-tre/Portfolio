import React from "react";
import TypeIt from "typeit-react";
import "../Message/message.scss";

const Message = () => {
  const isMobileOrTablet = window.innerWidth <= 768;
  return (
    <div className="background">
      {" "}
      <div className="glass">
        <h1>
          <TypeIt
            className="text"
            options={{
              speed: 30,

              waitUntilVisible: true,
              afterComplete: (instance) => {
                const cursor = instance.element.querySelector(".ti-cursor");
                if (cursor) cursor.style.display = "none";
              },
            }}
          >
            {isMobileOrTablet
              ? "En 2023, j’ai choisi de devenir développeur front-end et suivi une formation en tant qu'Intégratuer web qui a permis de renforcer mes compétences dans plusieurs domaines."
              : "En 2023, j’ai choisi de me reconvertir en tant que développeur front-end. J’ai débuté par une auto-formation en HTML et CSS, puis suivi une POEC de trois mois. Cette expérience a renforcé ma passion pour le domaine et m’a motivé à rejoindre la formation Intégrateur Web d’OpenClassrooms. Grâce à celle-ci, j'ai approfondi et renforcer mes compétences en JavaScript, en optimisation et surtout en création d'interfaces avec React,accompagné de React-Router et de Redux."}
          </TypeIt>
        </h1>
      </div>
    </div>
  );
};

export default Message;

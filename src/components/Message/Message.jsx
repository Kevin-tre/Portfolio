import React from "react";
import TypeIt from "typeit-react";
import "../Message/message.scss";

const Message = () => {
  const isMobileOrTablet = window.innerWidth <= 768;
  return (
    <div className="background">
      <div className="glass">
        <h1>
          <TypeIt
            className="text"
            options={{
              speed: 40,
              waitUntilVisible: true,
              afterComplete: (instance) => {
                const cursor = instance.element.querySelector(".ti-cursor");
                if (cursor) {
                  cursor.style.visibility = "hidden";
                }
              },
            }}
          >
            {isMobileOrTablet
              ? "En 2023, j’ai choisi de devenir développeur front-end et suivi une formation en tant qu'Intégrateur web qui a permis de renforcer mes compétences dans plusieurs domaines."
              : "En 2023, j’ai choisi de me reconvertir en développeur front-end. Après une auto-formation en HTML et CSS et une POEC de trois mois, j’ai rejoint la formation Intégrateur Web d’OpenClassrooms. J'y ai renforcé mes compétences en JavaScript, en optimisation et en création d'interfaces avec React, React-Router et Redux."}
          </TypeIt>
        </h1>
      </div>
    </div>
  );
};

export default Message;

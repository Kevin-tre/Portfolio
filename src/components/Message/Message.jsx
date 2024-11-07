import React from "react";
import TypeIt from "typeit-react";
import "../Message/message.scss";

const Message = () => {
  return (
    <div className="background">
      {" "}
      <div className="glass">
        <h1>
          <TypeIt
            className="text"
            options={{
              speed: 55,

              waitUntilVisible: true,
              afterComplete: (instance) => {
                const cursor = instance.element.querySelector(".ti-cursor");
                if (cursor) cursor.style.display = "none";
              },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            aperiam dolor illum beatae quaerat, perspiciatis at deserunt,
            obcaecati asperiores doloremque, enim nihil omnis reiciendis?
            Voluptates sint voluptatum officia ullam quaerat necessitatibus
            debitis velit voluptas blanditiis accusantium eaque assumenda
            nesciunt asperiores, aperiam, cumque, sapiente numquam? Delectus
            quis aut nesciunt non quo eligendi voluptatibus quaerat temporibus
            aliquid!
          </TypeIt>
        </h1>
      </div>
    </div>
  );
};

export default Message;

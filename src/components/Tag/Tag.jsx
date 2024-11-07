import React from "react";
import "../Tag/tag.scss";
import { Chip } from "@mui/material";

const Tag = ({ tags }) => {
  return (
    <div>
      {tags &&
        tags.map((tag, index) => (
          <Chip
            className={`tag ${tag.toLowerCase()}`} // Convertit le tag en minuscule pour correspondre à la classe CSS
            key={index}
            label={tag}
          />
        ))}
    </div>
  );
};

export default Tag;

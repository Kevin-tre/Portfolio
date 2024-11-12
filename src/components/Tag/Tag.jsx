import React, { useContext } from "react";
import "../Tag/tag.scss";
import { Chip } from "@mui/material";
import { DarkModeContext } from "../../context/DarkModeContext";

const Tag = ({ tags }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div>
      {tags &&
        tags.map((tag, index) => (
          <Chip
            className={`tag ${
              darkMode ? "dark-mode-tag" : tag.toLowerCase()
            } test`}
            key={index}
            label={tag}
          />
        ))}
    </div>
  );
};

export default Tag;

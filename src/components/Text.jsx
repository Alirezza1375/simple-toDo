import React from "react";

export default function Text({ color, size, children }) {
  const getSize = () => {
    switch (size) {
      case "small":
        return 14;
      case "medium":
        return 16;
      case "large":
        return 18;
      case "huge":
        return 24;
      default:
        return 16;
    }
  };

  const getColor = () => {
    switch (color) {
      case "primary":
        return "#cfcfca";
      case "secondary":
        return "#172b4d";
      default:
        return color;
    }
  };

  return (
    <span style={{ color: getColor(), fontSize: `${getSize()}px` }}>
      {children}
    </span>
  );
}

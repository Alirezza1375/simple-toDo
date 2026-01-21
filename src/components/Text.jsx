import React from "react";

export default function Text(props) {
  const getSize = () => {
    switch (props.size) {
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
    switch (props.color) {
      case "primary":
        return "#cfcfca";
      case "secondary":
        return "#172b4d";
      default:
        return props.color;
    }
  };

  return (
    <span style={{ fontSize: `${getSize()}px`, color: getColor() }}>
      {props.children}
    </span>
  );
}

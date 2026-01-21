import React from "react";

export default function Button(props) {
  return (
    <div
      onClick={() => onClick(e)}
      className={`bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white 
        rounded transition duration-300 ease-in-out transform ${props.className}`}
    >
      {props.children}
    </div>
  );
}

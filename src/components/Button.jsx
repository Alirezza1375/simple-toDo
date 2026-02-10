import React from "react";

export default function Button({ className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 px-4 py-4 text-white hover:bg-blue-800 active:font-bold rounded-lg 
           cursor-pointer flex jsutify-center items-center ${className} `}
    >
      {children}
    </button>
  );
}

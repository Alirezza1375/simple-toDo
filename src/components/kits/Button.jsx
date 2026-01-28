import React from "react";

export default function Button({ className, onClick, children }) {
  return (
    <div
      onClick={onClick}
      className={`bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 transition duration-300 ease-in-out transform 
        hover:font-bold flex justify-center items-center cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}

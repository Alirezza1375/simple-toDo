import React from "react";

export default function Input(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
        text-white focus:ring-blue-500 placeholder-gray-300 ${props.className}`}
    />
  );
}

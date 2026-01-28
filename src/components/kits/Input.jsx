import React from "react";

export default function Input({
  value,
  type = "text",
  onChange,
  placeholder,
  className,
}) {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={`px-4 py-2 w-full text-white placeholder-gray-200 border-2 border-gray-300 focus:outline-none
        focus:ring-2 focus:ring-blue-600 rounded-lg  ${className}`}
    />
  );
}

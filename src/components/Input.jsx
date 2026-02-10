import React from "react";

export default function Input({
  type = "text",
  value,
  onChange,
  className,
  placeholder,
  name,
  id,
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 text-white placeholder-gray-200 border-2 border-blue-950 border-solid rounded-lg ${className}`}
    />
  );
}

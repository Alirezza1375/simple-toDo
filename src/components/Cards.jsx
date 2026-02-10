import React from "react";
import Text from "./Text";

export default function Cards({
  children,
  className,
  delOnClick,
  forwOnClick,
}) {
  return (
    <div
      className={`bg-[#22272b] p-2 m-2 cursor-pointer flex justify-between items-center ${className}`}
    >
      <Text color="primary">{children}</Text>
      <div className="flex flex-row items-center gap-2">
        <button
          onClick={delOnClick}
          className="hover:text-gray-300 active:font-bold cursor-pointer"
        >
          X
        </button>
        <img
          onClick={forwOnClick}
          src="/forward-icon.png"
          className="h-4 w-4 flex justify-center items-center hover:bg-gray-300"
        />
      </div>
    </div>
  );
}

import React from "react";
import Text from "../kits/Text";

export default function TodoCardItem({ children, onClick }) {
  return (
    <div onClick={onClick} className="bg-[#22272b] p-2 my-2 cursor-pointer ">
      <Text color="primary">{children}</Text>
    </div>
  );
}

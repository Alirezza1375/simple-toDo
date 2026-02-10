import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Text from "./Text";
import Cards from "./Cards";

export default function TodoList({
  todoList,
  handleAddCard,
  handleDeleteCard,
  handleOpenDialog,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddCardToList = () => {
    if (!inputValue) {
      alert("No card added!");
    } else {
      handleAddCard(todoList.id, inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="bg-gray-800 p-2 max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <Text color="primary" size="huge">
          {todoList.title}
        </Text>
        <Button>...</Button>
      </div>
      <div>
        {todoList.cardItems?.map((item) => {
          return (
            <Cards
              key={item.id}
              delOnClick={() => handleDeleteCard(todoList.id, item.id)}
              forwOnClick={() => handleOpenDialog(todoList.id, item)}
            >
              {item.title}
            </Cards>
          );
        })}
      </div>
      <div className="flex flex-row">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add card..."
          className="mr-2"
        />
        <Button onClick={handleAddCardToList}>+</Button>
      </div>
    </div>
  );
}

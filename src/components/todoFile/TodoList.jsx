import { useState } from "react";
import Button from "../kits/Button";
import Input from "../kits/Input";
import Text from "../kits/Text";
import TodoCardItem from "./TodoCardItem";

export default function TodoList({
  todoList,
  handleAddCard,
  handleDelete,
  handleOpenDialog,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodoCard = () => {
    if (!inputValue) {
      alert("No card added!");
    } else {
      handleAddCard(todoList.id, inputValue);
      setInputValue("");
    }
  };

  const handleDeleteCard = (id) => {
    handleDelete(todoList.id, id);
  };

  console.log("value", inputValue);

  return (
    <div className="bg-gray-800 p-2 m-2 max-w-xs ">
      <div className="flex justify-between items-center p-2 m-1">
        <Text color="primary" size="huge">
          {todoList.title}
        </Text>
        <Button>...</Button>
      </div>
      <div>
        {todoList.todoCards?.map((item) => {
          return (
            <TodoCardItem key={item.id} onClick={handleOpenDialog}>
              {item.title}
            </TodoCardItem>
          );
        })}
      </div>
      <div className="flex flex-row">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add card..."
          className="mr-1"
        />
        <Button onClick={handleAddTodoCard}>+</Button>
      </div>
    </div>
  );
}

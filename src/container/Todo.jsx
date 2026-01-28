import { useEffect, useState } from "react";
import Button from "../components/kits/Button";
import Input from "../components/kits/Input";
import { v4 as uuv4 } from "uuid";
import TodoList from "../components/todoFile/TodoList";
import ModalDialog from "../components/dialogFile/Dialog";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodoList = () => {
    if (!inputValue) {
      alert("Input should not be empty!");
    } else {
      setList([...list, { id: uuv4(), title: inputValue, todoCards: [] }]);
      setInputValue("");
    }
  };

  const handleAddCardToList = (listId, newItem) => {
    setList(
      list.map((item) => {
        if (item.id === listId) {
          return {
            ...item,
            todoCards: [...item.todoCards, { id: uuv4(), title: newItem }],
          };
        }
        return item;
      })
    );
  };

  const handleDeleteCard = (listId, cardId) => {
    setList(
      list.map((item) => {
        if (item.id === listId) {
          return {
            ...item,
            todoCards: item.todoCards.filter((card) => card.id !== cardId),
          };
        }
        return item;
      })
    );
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  console.log("list", list);

  return (
    <div>
      <div className="flex flex-row">
        {list.map((item) => {
          return (
            <div key={item.id}>
              <TodoList
                todoList={item}
                handleAddCard={handleAddCardToList}
                handleDelete={handleDeleteCard}
                handleOpenDialog={handleOpenDialog}
              />
            </div>
          );
        })}
      </div>
      <div className="bg-gray-800 h-15 w-100 flex flex-row m-2 rounded-lg">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="List name..."
        />
        <Button onClick={handleAddTodoList}>Add</Button>
      </div>
      <ModalDialog open={openDialog} handleClose={handleCloseDialog} />
    </div>
  );
}

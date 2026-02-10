import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { v4 as uuvv4 } from "uuid";
import TodoList from "../components/TodoList";
import ModalDialog from "../components/Dialog";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [displayDialog, setDisplayDialog] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [targetListid, setTargetListId] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddToList = () => {
    if (!inputValue) {
      alert("input should not be empty!");
    } else {
      setList([...list, { id: uuvv4(), title: inputValue, cardItems: [] }]);
      setInputValue("");
    }
  };

  const handleAddCardToList = (listId, newItem) => {
    setList(
      list.map((item) => {
        if (item.id === listId) {
          return {
            ...item,
            cardItems: [...item.cardItems, { id: uuvv4(), title: newItem }],
          };
        }
        return item;
      })
    );
  };

  const handleDeleteCard = (listId, cardId) => {
    setList((prevList) =>
      prevList.map((item) => {
        if (item.id === listId) {
          return {
            ...item,
            cardItems: item.cardItems.filter((c) => c.id !== cardId),
          };
        }
        return item;
      })
    );
  };

  const handleOpenDialog = (listId, card) => {
    setSelectedCard({ listId, card });
    setDisplayDialog((prev) => !prev);
  };

  const handleCloseDialog = () => {
    setSelectedCard(null);
    setTargetListId(null);
    setDisplayDialog((prev) => !prev);
  };

  const handleMoveCard = () => {
    if (!selectedCard || !targetListid) return;
    const { listId, card } = selectedCard;
    setList((prevList) =>
      prevList.map((item) => {
        if (item.id === listId) {
          return {
            ...item,
            cardItems: item.cardItems.filter((c) => c.id !== card.id),
          };
        } else if (item.id === targetListid) {
          return {
            ...item,
            cardItems: [...item.cardItems, card],
          };
        }
        return item;
      })
    );
    handleCloseDialog();
  };

  console.log("list", list);
  console.log("selected card:", selectedCard);

  return (
    <div className="m-5 flex flex-row gap-5">
      <div>
        {list.map((item) => {
          return (
            <div key={item.id} className="m-2 p-2">
              <TodoList
                todoList={item}
                handleAddCard={handleAddCardToList}
                handleDeleteCard={handleDeleteCard}
                handleOpenDialog={handleOpenDialog}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row bg-gray-800 rounded h-15 w-100 p-2">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="List name..."
          className="mr-2"
        />
        <Button onClick={handleAddToList}>Add</Button>
      </div>
      <ModalDialog
        openDialog={displayDialog}
        closeDialog={handleCloseDialog}
        cardData={selectedCard}
        availableLists={list.filter((ls) => ls.id !== selectedCard?.listId)}
        onTargetChange={setTargetListId}
        onMove={handleMoveCard}
      />
    </div>
  );
}

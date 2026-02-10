import React from "react";
import { Dialog } from "@mui/material";
import Button from "./Button";
import Text from "./Text";
import Input from "./Input";

export default function ModalDialog({
  openDialog,
  closeDialog,
  cardData,
  availableLists,
  onTargetChange,
  onMove,
}) {
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#292a2b",
          width: "250px",
        },
      }}
      open={openDialog}
      onClose={closeDialog}
    >
      <div>
        <div className="flex justify-between items-center p-2">
          <Text color="primary" size="large">
            {cardData?.card?.title}
          </Text>
          <Button className="h-9 w-9" onClick={closeDialog}>
            X
          </Button>
        </div>
        <div className="m-2 p-2 flex justify-center">
          <Text color="primary">Move to</Text>
        </div>
        <div className="p-2 m-2">
          {availableLists?.map((item) => {
            return (
              <div key={item.id} className="flex justify-center gap-2">
                <input
                  type="radio"
                  name="targetList"
                  value={item.id}
                  onChange={() => onTargetChange(item.id)}
                  id={`list-${item.id}`}
                />
                <label className="text-gray-300" htmlFor={`list-${item.id}`}>
                  {item.title}
                </label>
              </div>
            );
          })}
        </div>
        <div className="m-2 p-2 flex justify-center">
          <Button onClick={onMove} className="px-2 py-2">
            Move
          </Button>
        </div>
      </div>
    </Dialog>
  );
}

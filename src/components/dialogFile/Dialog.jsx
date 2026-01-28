import React from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";

export default function ModalDialog({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          sx: {
            border: "solid",
            borderColor: "black",
            width: "800px",
            height: "200px",
            backgroundColor: "#2f497a",
          },
        },
      }}
    >
      <Button
        variant="contained"
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
      >
        close
      </Button>
    </Dialog>
  );
}

import React from "react";
import { Drawer } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ContentDrawer({ open, onClose, content }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div>
        <ChevronRightIcon />
        <h2>{content.title}</h2>
        <p>Link: {content.link}</p>
        <p>Employee Count: {content.employeecount}</p>
        <p>Location: {content.location}</p>
        <p>Description: {content.description}</p>
      </div>
    </Drawer>
  );
}

import React, { useState } from "react";
import { MuiChipsInputStyle } from "../listing/ListingStyle";

export default function MuiChip() {
  const [chips, setChips] = useState([]);

  const handleChange = (newChips) => {
    setChips(newChips);
  };

  return (
    <MuiChipsInputStyle
      placeholder="Type any term"
      value={chips}
      onChange={handleChange}
    />
  );
}

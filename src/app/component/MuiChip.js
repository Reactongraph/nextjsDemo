import React from "react";
import { MuiChipsInputStyle } from "../listing/ListingStyle";

export default function MuiChip() {
  const [chips, setChips] = React.useState([]);

  const handleChange = (newChips) => {
    setChips(newChips);
  };

  return <MuiChipsInputStyle placeholder="Type any term" value={chips} onChange={handleChange} />;
}

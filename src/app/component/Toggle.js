"use client";

import * as React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ToggleStyle, ToggleStyleGrid } from "../listing/ListingStyle";
export default function Toggle() {
  const [view, setView] = React.useState(false);

  return (
    <>
      <ToggleStyleGrid>
        <ToggleButtonGroup
          orientation="vertical"
          value={view}
          exclusive
          onClick={() => setView(!view)}
        >
          <ToggleStyle value="list" aria-label="list">
            <ViewListIcon />
          </ToggleStyle>
        </ToggleButtonGroup>
      </ToggleStyleGrid>
    </>
  );
}

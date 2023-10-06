"use client";

import * as React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ListingSidebar from "./ListingSidebar";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { Grid } from "@mui/material";
import { H4, H5, InputStyle, TextFieldStyle } from "../listing/ListingStyle";

export default function ToggleSidebar() {
  const [view, setView] = React.useState(false);

  return (
    <>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onClick={() => setView(!view)}
      >
        <TuneIcon />
      </ToggleButtonGroup>

      <Grid style={{ width: "100%", height: "100%", backgroundColor: "grey" }}>
        <Modal
          style={{
            backgroundColor: "#FFF",
            margin: "auto 10%",
            padding: "5px",
          }}
          toggle={() => setView(!view)}
          isOpen={view}
        >
          <ModalBody>
            <h4>Filter</h4>
            <Grid>
              <H4>Terms</H4>
              <InputStyle>Include these terms</InputStyle>
              <TextFieldStyle placeholder="Type any term"></TextFieldStyle>
              <InputStyle>Exclude these terms</InputStyle>
              <TextFieldStyle placeholder="Type any term"></TextFieldStyle>
              <H4>Operating Model</H4>
              <H5>Industry</H5>
              <InputStyle>Include</InputStyle>
              <TextFieldStyle placeholder="Type and search"></TextFieldStyle>
              <InputStyle>Exclude</InputStyle>
              <TextFieldStyle placeholder="Type and search"></TextFieldStyle>
              <H4>Location</H4>
            </Grid>
            <ListingSidebar />
          </ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              type="button"
              onClick={() => setView(!view)}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Grid>
    </>
  );
}

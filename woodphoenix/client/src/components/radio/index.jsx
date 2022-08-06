import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import css from "./styles/css.modules.css";
import { useState } from "react";

export default function RadioButtonsGroup({ setRole }) {
  return (
    <FormControl className={css.form}>
      <FormLabel
        id="demo-radio-buttons-group-label"
        style={{ color: "#5b88a5" }}
      >
        what you are
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="ADMIN"
          control={
            <Radio
              value={"tested"}
              onClick={(e) => setRole(e.target.value)}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 14,
                },
              }}
            />
          }
          label="Admin"
        />
        <FormControlLabel
          size="small"
          value="CAPTAIN"
          control={
            <Radio
              onClick={(e) => setRole(e.target.value)}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 14,
                },
              }}
            />
          }
          label="Captain"
        />
        <FormControlLabel
          style={{
            fontSize: "5px",
          }}
          value="COLLABORADOR"
          control={
            <Radio
              onClick={(e) => setRole(e.target.value)}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 14,
                },
              }}
            />
          }
          label="Collaborator"
        />
      </RadioGroup>
    </FormControl>
  );
}

// src/components/Header.jsx
import React from "react";
import { styled } from "@mui/material/styles";
import { useAppContext } from "../context/AppContext";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import "../styles/header.css";
import DebugOutline from "./DebugOutline";

export default function Header() {
  const { developerMode, toggleDeveloperMode } = useAppContext();

  return (
    <DebugOutline>
      <header className="header header-transparent">
        <DebugOutline>
          <div className="header-toggle">
            <FormControlLabel
              control={
                <CustomSwitch
                  checked={developerMode}
                  onChange={toggleDeveloperMode}
                />
              }
              label="Dev Mode"
            />
          </div>
        </DebugOutline>
      </header>
    </DebugOutline>
  );
}

const CustomSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-track": {
    backgroundColor: "#d8d8d8", // unchecked
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#63ff3a", // checked
  },
}));

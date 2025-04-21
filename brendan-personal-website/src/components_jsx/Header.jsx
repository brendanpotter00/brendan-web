// src/components/Header.jsx
import React from "react";
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
                <Switch
                  checked={developerMode}
                  onChange={toggleDeveloperMode}
                  color="primary"
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

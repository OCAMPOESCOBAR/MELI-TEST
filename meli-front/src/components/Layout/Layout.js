import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import "./layout.scss";
import logo from "../../assets/img/logo.png";
import { SearchInput } from "../SearchInput/SearchInput";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState(":query");
  const [inputValue, setInputValue] = useState("");

  const onToHome = () => {
    navigate("/");
    setSearch(":query");
    setInputValue("");
  };

  return (
    <Box className="main-container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="app-bar">
          <Toolbar className="toolbar">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={onToHome}
            >
              <img src={logo} alt="logo" width="50px" />
            </IconButton>
            <SearchInput
              setSearch={setSearch}
              setInputValue={setInputValue}
              inputValue={inputValue}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet context={[search, setSearch, inputValue]} />
    </Box>
  );
};

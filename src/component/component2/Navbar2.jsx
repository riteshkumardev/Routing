import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./component2/style.css";

import { Link } from "react-router-dom";
import { AppBar, Badge, IconButton, Paper } from "@mui/material";
import List from "./Lists";
function Navbar2({ cart }) {
  return (
    <Paper elevation={3}>
      <AppBar position="fixed">
        <div className="navbar">
          
          <List/>
          <div>
            <Link className="link" to="/cartItem">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={cart} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </div>
      </AppBar>
    </Paper>
  );
}
export default Navbar2;

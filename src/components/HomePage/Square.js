import React from "react";
import "./Square.css";
import CreateIcon from "@mui/icons-material/Create";

function Square() {
  return (
    <div className="squareWrapper">
      <CreateIcon sx={{ margin: "1rem", color: 'white' }} />
    </div>
  );
}

export default Square;

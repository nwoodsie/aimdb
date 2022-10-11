import React from "react";
import "./Square.css";
import CreateIcon from "@mui/icons-material/Create";

function Square() {
  return (
    <div className="squareWrapper">
      <CreateIcon sx={{ margin: "1rem", color: 'white' }} />
      <div className="squareTextWrapper">
        <div className="upperText">
          Top 100 
        </div>
        <div className="lowerText">
          hello
        </div>
      </div>
    </div>
  );
}

export default Square;

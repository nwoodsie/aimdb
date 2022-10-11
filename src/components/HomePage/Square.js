import React from "react";
import "./Square.css";
import CreateIcon from "@mui/icons-material/Create";
import "./InfoBlock.css";

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
function Square() {
  return (
     <div className="infoBlockWrapper3" onClick={() => openInNewTab('https://youtube.com')}>
      <CreateIcon sx={{ margin: "1rem", color: 'white' }} />
      <div className="squareTextWrapper">
        <div className="upperText">
            How - to guide!
        </div>
        <div className="lowerText">
          View top 100 movies
        </div>
      </div>
    </div>
  );
}

export default Square;

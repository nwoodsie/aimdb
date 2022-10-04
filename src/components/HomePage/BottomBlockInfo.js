import React from "react";
import "./BottomBlockInfo.css";
import ReportIcon from "@mui/icons-material/Report";

function bottomBlockInfo() {
  return (
    <div className="bottomInfoWrapper">
      <ReportIcon sx={{ color: "white" }} />
      <div className="bottomInfoTitle">Report an Issue</div>
      <div className="bottomInfoText">
        Report any issues you find
        <br />
        with the app here
      </div>
      <div className="linkText">
        <a href="google.com">Report an Issue</a>
      </div>
    </div>
  );
}

export default bottomBlockInfo;

import React from "react";
import "./InfoBlock.css";

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

function InfoBlock() {
  return (
    <div className="infoBlockWrapper" onClick={() => openInNewTab('https://youtube.com')}>
      <div className="textWrapper">
        <b>Video Tutorial</b>
        View a tutorial
      </div>
    </div>
  );
}

export default InfoBlock;

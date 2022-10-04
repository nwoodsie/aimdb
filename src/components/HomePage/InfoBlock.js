import React from "react";
import "./InfoBlock.css";

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

function InfoBlock(colour) {
  return (
    <div className="infoBlockWrapper" onClick={() => openInNewTab('https://youtube.com')}>
      <div className="textWrapper">
        <b>Video Tutorial</b>
        view a quick tutorial
      </div>
    </div>
  );
}

export default InfoBlock;

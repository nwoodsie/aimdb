import React from "react";
import "./Square.css";
import CasinoIcon from "@mui/icons-material/Casino";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Square({ upper, lower, icon }) {
  function deriveIcon(icon) {
    if (icon === "CasinoIcon") {
      return (
        <div className="casinoIconBlock">
          <CasinoIcon className="icon" />
        </div>
      );
    } else if (icon === "EmojiEventsIcon") {
      return (
        <div className="emojiEventsIconBlock">
          <EmojiEventsIcon className="icon" />
        </div>
      )
    } else if (icon === "GitHubIcon") {
      return (
        <div className="gitHubIconBlock">
          <GitHubIcon className="icon" />
        </div>
      )
    } else {
      return (
        <div className="emailIconBlock">
          <EmailIcon className="icon" />
        </div>
      )
    }
  }

  return (
    <div className="squareWrapper">
      {deriveIcon(icon)}
      <div className="squareTextWrapper">
        <div className="upperText">{upper}</div>
        <div className="lowerText">{lower}</div>
      </div>
    </div>
  )
}

export default Square;

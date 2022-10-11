import React from "react";
import "./HomePage.css";
import InfoBlock from "./InfoBlock";
import InfoBlock2 from "./InfoBlock2";
import BottomBlockInfo from "./BottomBlockInfo";
import Square from "./Square";

const plot = "Let's get started";

function Homepage() {
  return (
    <>
      <div className="homeWrapper">
        <div className="homeBlock">
          <div className="wrapper">
            <h6>Welcome to AIMDb! </h6>
          </div>
          <div className="wrapper">
            <b>{plot}</b>
          </div>
          <div className="infoWrapper">
            <InfoBlock />
            <InfoBlock2 />
          </div>
          <div className="wrapper">
            <b>Generate a Movie</b>
          </div>
          <div className="squaresWrapper">
            <Square upper='Movie Randomiser' lower='view a random movie' icon='CasinoIcon'/>
            <Square upper='Top 100 Movies' lower='browse the top 100' icon='EmojiEventsIcon'/>
            <Square upper='Git Hub' lower='visit our github repository' icon='GitHubIcon'/>
            <Square upper='Movie Randomiser' lower='view a random movie'/>
          </div>
        </div>
      </div>
      
      <div className="bottomBlock">
        <BottomBlockInfo />
      </div>
    </>
  );
}

export default Homepage;

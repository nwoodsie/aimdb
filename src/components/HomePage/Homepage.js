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
            <h5>Welcome to AIMDb</h5>
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
            <Square />
            <Square />
            <Square />
            <Square />
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

import React from "react";
import Board from "./Board";
import "./Square.css"

const Game = () => {
  return (
    <div className="bg-blue-300 h-screen">
      <div className="text-center text-7xl pt-8 font-class">
        <h1>TIC TAC TOE</h1>
      </div>
      <Board />
      <div className = "btn-con">
      <a href="/">
        <button className="btn">Play Again</button>
      </a>
      </div>
    </div>
  );
};

export default Game;

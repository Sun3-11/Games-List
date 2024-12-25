import React from "react";
import GameItem from "./GameItem";

const Game = ({ items, onGameClick }) => {
  return (
    <div className="section-center">
      {items.map((game) => {
        return <GameItem key={game.id} {...game} onClick={onGameClick} />;
      })}
    </div>
  );
};

export default Game;

import React, { useState } from "react";
import game from "./data";
import Game from "./components/Game";
import Title from "./components/Title";
import Filters from "./components/Filters";
import SelectedGameDetails from "./components/SelectedGameDetails";
import GameSlider from "./components/GameSlider";

const App = () => {
  const [gamesItems, setGamesItems] = useState(game);
  const [selectedGame, setSelectedGame] = useState(null);
  const [filters, setFilters] = useState({
    category: "All",
    rating: "All",
    difficulty: "All",
    year: "All",
    price: [0, 100],
  });

  const handleGameClick = (gameDetails) => {
    setSelectedGame(gameDetails);
  };

  const updateFilter = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const filteredGames = gamesItems.filter((game) => {
    const { category, rating, difficulty, year, price } = filters;
    return (
      (category === "All" || game.category === category) &&
      (rating === "All" || game.rating === parseInt(rating)) &&
      (difficulty === "All" || game.difficulty === difficulty) &&
      (year === "All" || game.year === parseInt(year)) &&
      game.price >= price[0] &&
      game.price <= price[1]
    );
  });

  return (
    <main>
      <section className="menu">
        <GameSlider gamesItems={gamesItems} handleGameClick={handleGameClick} />

        {selectedGame && <SelectedGameDetails game={selectedGame} />}

        <Title text="Games List" />
        <Filters
          filters={filters}
          updateFilter={updateFilter}
          gamesItems={gamesItems}
        />
        <Game items={filteredGames} onGameClick={handleGameClick} />
      </section>
    </main>
  );
};

export default App;

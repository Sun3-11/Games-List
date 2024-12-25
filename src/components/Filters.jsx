import React from "react";

const Filters = ({ filters, updateFilter, gamesItems }) => {
  const categories = [...new Set(gamesItems.map((game) => game.category))];
  // const ratings = [...new Set(gamesItems.map((game) => game.rating))];
  const difficulties = [...new Set(gamesItems.map((game) => game.difficulty))];
  const years = [...new Set(gamesItems.map((game) => game.year))];
  // const minPrice = Math.min(...gamesItems.map((game) => game.price));
  // const maxPrice = Math.max(...gamesItems.map((game) => game.price));

  return (
    <div className="filters mb-8 p-4 bg-gray-200 rounded-lg">
      {["category", "difficulty", "year"].map((filter) => (
        <div key={filter} className="filter">
          <label htmlFor={filter}>
            {filter.charAt(0).toUpperCase() + filter.slice(1)}:
          </label>
          <select
            id={filter}
            value={filters[filter]}
            onChange={(e) => updateFilter(filter, e.target.value)}
            className="ml-2 p-2 rounded"
          >
            <option value="All">All</option>
            {(filter === "category"
              ? categories
              : // : filter === "rating"
              // ? ratings
              filter === "difficulty"
              ? difficulties
              : years
            ).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      {/* <div className="filter">
        <label htmlFor="price">Price:</label>
        <input
          type="range"
          id="price"
          min={minPrice}
          max={maxPrice}
          step="1"
          value={filters.price[1]}
          onChange={(e) =>
            updateFilter("price", [filters.price[0], parseInt(e.target.value)])
          }
          className="ml-2"
        />
        <span className="ml-2">${filters.price[1]}</span>
      </div> */}
    </div>
  );
};

export default Filters;

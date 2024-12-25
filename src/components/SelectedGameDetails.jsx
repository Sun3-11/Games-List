const SelectedGameDetails = ({ game }) => {
  return (
    <div className="selected-game-details mb-8 p-4 bg-gray-100 rounded-lg">
      <div className="game-details-left">
        <img
          src={game.img}
          alt={game.title}
          className="w-full h-80 object-cover rounded-md mb-4"
        />
      </div>
      <div className="game-details-right">
        <span
          style={{ float: "right" }}
          className="item-price text-lg font-bold text-green-600"
        >
          ${game.price}
        </span>
        <h2 className="text-2xl font-bold text-gray-800">{game.title}</h2>

        <p className="item-text mt-2 text-gray-600">{game.desc}</p>
        <div className="mt-4 text-gray-500">
          <span className="ml-4">Year: {game.year}</span>
          <span className="ml-4">Difficulty: {game.difficulty}</span>
          <span className="ml-4">Category: {game.category}</span>
          <span className="ml-4">Rating: {game.rating}⭐</span>
        </div>
        {game.gameOfTheYear && (
          <span
            className="text-red-500 text-sm font-bold"
            style={{ color: "#ffee07cc", margin: "15px", float: "right" }}
          >
            Game of the Year 🎉
          </span>
        )}
      </div>
    </div>
  );
};
export default SelectedGameDetails;

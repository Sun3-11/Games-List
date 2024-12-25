import React from "react";

const GameItem = ({
  id,
  title,
  img,
  desc,
  price,
  year,
  rating,
  difficulty,
  category,
  onClick,
}) => {
  return (
    <article
      key={id}
      className="menu-item bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 containerA"
    >
      <img
        src={img}
        alt={title}
        className="img w-full h-64 object-cover rounded-md"
      />
      <span className="rating">{rating}⭐</span>

      <div className="item-info mt-4 ">
        <header className="flex justify-between items-center">
          <h4 className="text-xl  gray-100">{title}</h4>
          {/* <span className="item-price text-lg font-bold text-green-600">
            ${price}
          </span> */}
        </header>
        <span className="item-text mt-2 text-gray-600">Year: {year}</span>
        <span
          className="item-text mt-2 text-gray-600"
          style={{ float: "right" }}
        >
          Difficulty: {difficulty}
        </span>

        <p className="item-text mt-2 text-gray-300">{category}</p>

        <button
          className="btn .btn-hipster"
          style={{ width: "90%", margin: "13px" }}
          onClick={() =>
            onClick({
              title,
              img,
              desc,
              price,
              year,
              rating,
              difficulty,
              category,
            })
          }
        >
          More Details
        </button>
      </div>
    </article>
  );
};

export default GameItem;

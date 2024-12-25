import React from "react";
import Slider from "react-slick";

const GameSlider = ({ gamesItems, handleGameClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {gamesItems.map((game) => (
          <div
            key={game.id}
            className="slider-item"
            onClick={() => handleGameClick(game)}
          >
            <img src={game.img} alt={game.title} className="slider-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GameSlider;

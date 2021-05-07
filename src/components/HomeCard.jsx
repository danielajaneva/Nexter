import React from "react";

import sprite from "../img/sprite.svg";

const HomeCard = ({ home }) => {
  return (
    <div class="home">
      <img src={home.img} alt="House 1" class="home__img" />
      <svg class="home__like">
        <use href={`${sprite}#icon-heart-full`}></use>
      </svg>
      <h5 class="home__name">{home.name}</h5>
      <div class="home__location">
        <svg>
          <use href={`${sprite}#icon-map-pin`}></use>
        </svg>
        <p>{home.location}</p>
      </div>
      <div class="home__rooms">
        <svg>
          <use href={`${sprite}#icon-profile-male`}></use>
        </svg>
        <p>{home.rooms}</p>
      </div>
      <div class="home__area">
        <svg>
          <use href={`${sprite}#icon-expand`}></use>
        </svg>
        <p>
          {home.area}
          <sup>2</sup>
        </p>
      </div>
      <div class="home__price">
        <svg>
          <use href={`${sprite}#icon-key`}></use>
        </svg>
        <p>{home.price}</p>
      </div>
      <button class="btn home__btn">Contact realtor</button>
    </div>
  );
};

export default HomeCard;

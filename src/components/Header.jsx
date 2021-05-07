import React from "react";

import img1 from "../img/logo.png";
import img2 from "../img/logo-bbc.png";
import img3 from "../img/logo-forbes.png";
import img4 from "../img/logo-techcrunch.png";
import img5 from "../img/logo-bi.png";

const Header = () => {
  return (
    <header class="header">
      <img src={img1} alt="Nexter logo" class="header__logo" />
      <h3 class="heading-3">Your own home:</h3>
      <h1 class="heading-1">The ultimate personal freedom</h1>
      <button class="btn header__btn">View our properties</button>
      <div class="header__seenon-text">Seen on</div>
      <div class="header__seenon-logos">
        <img src={img2} alt="Seen on logo 1" />
        <img src={img3} alt="Seen on logo 2" />
        <img src={img4} alt="Seen on logo 3" />
        <img src={img5} alt="Seen on logo 4" />
      </div>
    </header>
  );
};

export default Header;

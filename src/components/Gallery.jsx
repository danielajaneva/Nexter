import React from "react";

import img9 from "../img/gal-1.jpeg";
import img10 from "../img/gal-2.jpeg";
import img11 from "../img/gal-3.jpeg";
import img12 from "../img/gal-4.jpeg";
import img13 from "../img/gal-5.jpeg";
import img14 from "../img/gal-6.jpeg";
import img15 from "../img/gal-7.jpeg";
import img16 from "../img/gal-8.jpeg";
import img17 from "../img/gal-9.jpeg";
import img18 from "../img/gal-10.jpeg";
import img19 from "../img/gal-11.jpeg";
import img20 from "../img/gal-12.jpeg";
import img21 from "../img/gal-13.jpeg";
import img22 from "../img/gal-14.jpeg";

const Gallery = () => {
  return (
    <section class="gallery">
      <figure class="gallery__item gallery__item--1">
        <img src={img9} alt="Gallery img 1" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--2">
        <img src={img10} alt="Gallery img 2" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--3">
        <img src={img11} alt="Gallery img 3" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--4">
        <img src={img12} alt="Gallery img 4" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--5">
        <img src={img13} alt="Gallery img 5" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--6">
        <img src={img14} alt="Gallery img 6" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--7">
        <img src={img15} alt="Gallery img 7" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--8">
        <img src={img16} alt="Gallery img 8" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--9">
        <img src={img17} alt="Gallery img 9" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--10">
        <img src={img18} alt="Gallery img 10" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--11">
        <img src={img19} alt="Gallery img 11" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--12">
        <img src={img20} alt="Gallery img 12" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--13">
        <img src={img21} alt="Gallery img 13" class="gallery__img" />
      </figure>
      <figure class="gallery__item gallery__item--14">
        <img src={img22} alt="Gallery img 14" class="gallery__img" />
      </figure>
    </section>
  );
};

export default Gallery;

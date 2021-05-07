import React from "react";

import HomeCard from "./HomeCard";
import { homes } from "./homesData";

const Homes = () => {
  return (
    <section class="homes">
      {/* {homes.map((home) => {
        return <HomeCard home={home} />;
      })} */}
      <HomeCard home={homes.home1} />
      <HomeCard home={homes.home2} />
      <HomeCard home={homes.home3} />
      <HomeCard home={homes.home4} />
      <HomeCard home={homes.home5} />
      <HomeCard home={homes.home6} />
    </section>
  );
};

export default Homes;

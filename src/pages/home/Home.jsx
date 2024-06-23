import React from "react";
import { Welcome } from "./Welcome";
import { AllInOne } from "./AllInOne";
import { Description } from "./Description";
import { Features } from "./Features";
import { Testimonial } from "./Testimonial";
import { News } from "./News";


export const Home = () => {
  return (
    <div className="home">
      <Welcome />
      <AllInOne />
      <Description />
      <Features />
      <Testimonial />
      <News />
    </div>
  )
}

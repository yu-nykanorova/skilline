import { Welcome } from "./Welcome";
import { AllInOne } from "./AllInOne";
import { SkillineIs } from "./SkillineIs";
import { Features } from "./Features";
import { Testimonial } from "./Testimonial";
import { News } from "./News";


export const Home = () => {
  return (
    <div className="home">
      <Welcome />
      <AllInOne />
      <SkillineIs />
      <Features />
      <Testimonial />
      <News />
    </div>
  )
}

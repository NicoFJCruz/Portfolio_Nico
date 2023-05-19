import { BrowserRouter } from "react-router-dom";
import { herobg } from "./assets";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="gradiente">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

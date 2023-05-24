import { BrowserRouter } from "react-router-dom";
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
import LazyLoad from "react-lazy-load";

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
          <Tech />
          <Works />
          <Experience />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <LazyLoad>
              <StarsCanvas />
            </LazyLoad>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

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
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />

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
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

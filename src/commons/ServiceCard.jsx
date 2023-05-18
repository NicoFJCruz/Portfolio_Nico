import { MotionConfig } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { CVnico, cvicon, download } from "../assets";
import { alerts } from "../utils/alerts";

const ServiceCard = ({ index, title, icon }) => {
  const notify = (info) => toast(info);

  const handleClick = (index) => {
    const randomNumber = Math.floor(Math.random() * alerts.length);
    alert(alerts[randomNumber]);
  };

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative"
        >
          <button
            className="absolute top-2 right-2 w-4 h-4"
            onClick={() => handleClick(index)}
          >
            <img src={icon[2]} alt="" />
          </button>

          <img src={icon[0]} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>

          {title === "Mi Curriculum Vitae" ? (
            <a href={CVnico} download="CV - Nicolás Cruz">
              <img src={download} alt="" className="w-10" />
            </a>
          ) : null}

          {title === "Mi perfil de Github" ? (
            <a href="https://github.com/NicoFJCruz" target="_blank">
              <img src={icon[1]} alt="" className="w-10" />
            </a>
          ) : null}

          {title === "Mi perfil de LinkedIn" ? (
            <a href="https://www.linkedin.com/in/nicofj-cruz/" target="_blank">
              <img src={icon[1]} alt="" className="w-10" />
            </a>
          ) : null}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;

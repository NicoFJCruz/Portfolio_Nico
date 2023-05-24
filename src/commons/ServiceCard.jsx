import { message } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { alerts } from "../constants";
import { fadeIn } from "../utils/motion";
import download from "../assets/download.png";

const ServiceCard = ({ index, title, icon }) => {
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * alerts.length);

    message.info(alerts[randomNumber], 3);
  };

  const links = {
    "Mi Curriculum Vitae": {
      href: "https://drive.google.com/file/d/1bCkh_xFPtVZHhSU3RfgHWEADzv1a4qtW/view",
      imgSrc: download,
    },
    "Mi perfil de Github": {
      href: "https://github.com/NicoFJCruz",
      imgSrc: icon[1],
    },
    "Mi perfil de LinkedIn": {
      href: "https://www.linkedin.com/in/nicofj-cruz/",
      imgSrc: icon[1],
    },
  };

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#152340] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative"
        >
          <button
            className="absolute top-2 right-2 w-4 h-4 "
            onClick={() => handleClick(index)}
          >
            <img src={icon[2]} alt="alert" />
          </button>

          {title in links ? (
            <a href={links[title].href} target="_blank">
              <div className="flex items-center flex-col relative ">
                <img
                  src={icon[0]}
                  alt={title}
                  className="w-16 h-16 object-contain mb-5"
                />
                <h3 className="text-white text-[20px] font-bold text-center mb-5">
                  {title}
                </h3>

                <img src={links[title].imgSrc} alt="" className="w-10" />
              </div>
            </a>
          ) : (
            <div className="flex items-center flex-col relative ">
              <img
                src={icon[0]}
                alt={title}
                className="w-16 h-16 object-contain mb-5"
              />
              <h3 className="text-white text-[20px] font-bold text-center mb-5">
                {title}
              </h3>

              <img src={icon[1]} alt="" className="w-10" />
            </div>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;

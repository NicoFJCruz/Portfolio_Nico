import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "../commons/ServiceCard";
import { SectionWrapper } from "../hoc";
import { nico, CVnico, cvicon, download } from "../assets";
import { ToastContainer, toast } from "react-toastify";
import { MotionConfig } from "framer-motion";
import { Tilt } from "react-tilt";
import { alerts } from "../utils/alerts";

const About = () => {
  const notify = (info) => toast(info);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * alerts.length);
    notify(alerts[randomNumber]);
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introducción </p>
        <h2 className={styles.sectionHeadText}> Acerca de mí </h2>
      </motion.div>

      <div className="flex flex-col items-center justify-items-cente md:flex-row r">
        <img
          src={nico}
          alt=""
          className="w-[13rem] h-[13rem] rounded-[15%] mr-[8%] mt-[2%] ml-[2%]"
        />
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Siempre he sentido gran interés por el mundo de la informática y la
          tecnología. Estudiando Ingeniería Electromecánica nunca dejé de lado
          esa pasión y he asistido a pequeños cursos relacionados. Realicé un
          Coding Bootcamp, dedicándome diariamente mas de 10 horas a profundizar
          en nuevas habilidades técnicas y blandas. Ahora, mi objetivo es
          trabajar en el rubro IT, donde pueda seguir aprendiendo y avanzando en
          este campo que tanto disfruto y en el que siempre he querido estar.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;

          /* return (
            <Tilt className="xs:w-[250px] w-full" key={index}>
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
                  className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative"
                >
                  <button
                    className="absolute top-2 right-2 w-4 h-4"
                    onClick={() => handleClick(index)}
                  >
                    <img src={service.icon[2]} alt="" />
                  </button>

                  <img
                    src={service.icon[0]}
                    alt={service.title}
                    className="w-16 h-16 object-contain"
                  />
                  <h3 className="text-white text-[20px] font-bold text-center">
                    {service.title}
                  </h3>

                  {service.title === "Mi Curriculum Vitae" ? (
                    <a href={CVnico} download="CV - Nicolás Cruz">
                      <img src={download} alt="" className="w-10" />
                    </a>
                  ) : null}

                  {service.title === "Mi perfil de Github" ? (
                    <a href="https://github.com/NicoFJCruz" target="_blank">
                      <img src={service.icon[1]} alt="" className="w-10" />
                    </a>
                  ) : null}

                  {service.title === "Mi perfil de LinkedIn" ? (
                    <a
                      href="https://www.linkedin.com/in/nicofj-cruz/"
                      target="_blank"
                    >
                      <img src={service.icon[1]} alt="" className="w-10" />
                    </a>
                  ) : null}
                </div>
              </motion.div>
            </Tilt>
          );*/
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

import { motion } from "framer-motion";
import React from "react";
import { nico } from "../assets";
import ServiceCard from "../commons/ServiceCard";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
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
          Coding Bootcamp, dedicándo más de 10 horas diarias a profundizar
          en nuevas habilidades técnicas y blandas. Ahora, mi objetivo principal
          en el rubro IT es continuar aprendiendo y avanzando en este campo que
          tanto disfruto y que siempre he querido estar. Estoy comprometido con
          el constante desarrollo y evolución, y emocionado por las
          posibilidades que el futuro me ofrece.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

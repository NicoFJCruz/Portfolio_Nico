import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "../commons/ServiceCard";
import { SectionWrapper } from "../hoc";
import { nico } from "../assets";

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
          Coding Bootcamp, dedicándome diariamente mas de 10 horas a profundizar
          en nuevas habilidades técnicas y blandas. Ahora, mi objetivo es
          trabajar en el rubro IT, donde pueda seguir aprendiendo y avanzando en
          este campo que tanto disfruto y en el que siempre he querido estar.
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

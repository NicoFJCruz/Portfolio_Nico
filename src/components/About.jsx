import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "../commons/ServiceCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}> Overview </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Siempre he sentido gran interés por el mundo de la informática y la
        tecnología. Estudiando Ingeniería Electromecánica nunca dejé de lado esa
        pasión y he asistido a pequeños cursos relacionados. Realicé un Coding
        Bootcamp, dedicándome diariamente mas de 10 horas a profundizar en
        nuevas habilidades técnicas y blandas. Ahora, mi objetivo es trabajar en
        el rubro IT, donde pueda seguir aprendiendo y avanzando en este campo
        que tanto disfruto y en el que siempre he querido estar.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => {
          return <ServiceCard key={service.title} index={i} {...service} />;
        })}
      </div>
    </>
  );
};

export default About;

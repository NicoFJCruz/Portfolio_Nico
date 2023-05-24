import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "../commons/ProjectCard";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> En que he trabajado </p>
        <h2 className={styles.sectionHeadText}> Proyectos </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          En este espacio, están algunos de los proyectos más destacados en los que he
          trabajado y que demuestran mi experiencia en el campo. Cada proyecto
          representa un desafío único que me ha permitido poner en práctica mis
          habilidades técnicas y blandas para lograr soluciones innovadoras y eficaces.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} index={i} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");

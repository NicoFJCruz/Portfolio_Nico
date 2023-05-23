import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import LazyLoad from "react-lazy-load";

const Tech = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}> Mis principales habilidades </p>
        <h2 className={`${styles.sectionHeadText} mb-5`}> Tecnologías </h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tec) => (
          <div className=" w-28 h-28" key={tec.name}>
            <LazyLoad height={100} offset={100}>
              <BallCanvas icon={tec.icon} />
            </LazyLoad>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

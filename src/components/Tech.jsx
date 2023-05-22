import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}> El stack que utilizo </p>
        <h2 className={styles.sectionHeadText}> Tecnologías </h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tec, i) => (
          <div className=" w-28 h-28" key={i}>
            <BallCanvas icon={tec.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

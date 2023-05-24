import React from "react";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github, link } from "../assets";

const ProjectCard = ({
  name,
  tags,
  description,
  image,
  source_code_link,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex items-stretch"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#152340] p-4 rounded-2xl lg:w-[360px] w-full"
      >
        <div className="realtive w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <a
                href={source_code_link[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="black-gradient w-12 h-12 rounded-full flex justify-center z-10 items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-4/5 h-4/5 object-contain"
                />
              </a>
            </div>

            {!source_code_link[1] ? (
              ""
            ) : (
              <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
                <a
                  href={source_code_link[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-gradient w-12 h-12  rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={link}
                    alt="link"
                    className="w-3/5 h-3/5 object-contain"
                  />
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-blod text-[24px]"> {name} </h3>
          <p className="mt-2 text-secondary text-[14px]"> {description} </p>
        </div>

        <div className="mt-4 fñex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <p key={i} className={`text-[14px] ${tag.color} mr-4 inline-block`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;

import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { catcomputer, github, link, linkedin } from "../assets";
import { Tooltip } from "antd";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_klyk5w8",
        "template_gu4jmf6",
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Nicolás Cruz",
          to_email: "nicofjcruz@gmail.com",
          message: form.message,
        },
        "thx9t1wq7Ygmi_yM5"
      )
      .then(() => {
        setLoading(false);
        alert("Gracias por contactarme. Te responderé lo antes posible.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        alert("Algo salió mal.");
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden justify-items-center items-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl max-w-full max-h-full"
      >
        <p className={styles.sectionSubText}> ¡Hablemos!</p>
        <h3 className={styles.sectionHeadText}> Contacto </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Tu nombre </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre y apellido"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Tu email </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Tu mensaje </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="¿Que quieres comentar?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div className="flex justify-around">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md ahadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            <Tooltip title="LinkedIn" color="#172554">
              <a href="https://www.linkedin.com/in/nicofj-cruz/">
                <img src={linkedin} alt="LinkedIn" className="w-10 h-10 rounded"/>
              </a>
            </Tooltip>

            <Tooltip title="GitHub"  color="#172554">
              <a href="https://github.com/NicoFJCruz">
                <img src={github} alt="LinkedIn" className="w-10 h-10 rounded"/>
              </a>
            </Tooltip>

            <Tooltip title="Mi CV"  color="#172554">
              <a href="https://drive.google.com/file/d/1bCkh_xFPtVZHhSU3RfgHWEADzv1a4qtW/view">
                <img src={link} alt="LinkedIn" className="w-10 h-10 rounded"/>
              </a>
            </Tooltip>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[600px] h-[600px]"
      >
        <img
          src={catcomputer}
          alt=""
          className="rounded-3xl max-w-full max-h-full"
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

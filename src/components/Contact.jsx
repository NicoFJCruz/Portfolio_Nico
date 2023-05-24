import emailjs from "@emailjs/browser";
import { message, Tooltip } from "antd";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.webp";
import link from "../assets/link.png";
import catcomputer from "../assets/catcomputer.webp";

const Contact = () => {
  const formRef = useRef();
  const service = import.meta.env.VITE_SERVICE;
  const template = import.meta.env.VITE_TEMPLATE;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;

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
    const validations = [
      { field: form.name, message: "Por favor coloque su nombre" },
      { field: form.email, message: "Por favor coloque su email" },
      { field: form.message, message: "Por favor escriba un mensaje" },
    ];

    for (const validation of validations) {
      if (!validation.field) {
        return message.warning(validation.message);
      }
    }

    setLoading(true);

    emailjs
      .send(
        service,
        template,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Nicolás Cruz",
          to_email: "nicofjcruz@gmail.com",
          message: form.message,
        },
        public_key
      )
      .then(() => {
        setLoading(false);
        message.success(
          "Gracias por contactarme. Te responderé lo antes posible."
        );
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        message.error(
          "Algo salió mal. Cualquier inconveniente puedes contactarme por otras redes."
        );
      });
  };

  return (
    <div className="xl:mt-2 xl:flex-row flex-col flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl max-w-full max-h-full"
      >
        <p className={styles.sectionSubText}> ¡Hablemos!</p>
        <h3 className={styles.sectionHeadText}> Contacto </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1"> Tu nombre </span>
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
              <a
                href="https://www.linkedin.com/in/nicofj-cruz/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-10 h-10 rounded"
                />
              </a>
            </Tooltip>

            <Tooltip title="GitHub" color="#172554">
              <a href="https://github.com/NicoFJCruz" target="_blank">
                <img
                  src={github}
                  alt="LinkedIn"
                  className="w-10 h-10 rounded"
                />
              </a>
            </Tooltip>

            <Tooltip title="Mi CV" color="#172554">
              <a
                href="https://drive.google.com/file/d/1bCkh_xFPtVZHhSU3RfgHWEADzv1a4qtW/view"
                target="_blank"
              >
                <img src={link} alt="LinkedIn" className="w-10 h-10 rounded" />
              </a>
            </Tooltip>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[750px] xs:h-[550px] h-[350px] mt-[8%]"
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

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4">
      <div className="container mx-auto text-center text-secondary">
        <p className="text-sm">
          &copy; {currentYear} Nicolás Cruz. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

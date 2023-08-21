import React, { useState } from "react";
import "../style/modal.css"; // Assurez-vous d'avoir un fichier CSS pour styliser le modal

// Flag import
import uk from "../assets/picture/gb.png";
import spa from "../assets/picture/Spain.png";
import fra from "../assets/picture/fr.png";
import isr from "../assets/picture/Isr.webp";

const Modal = ({ updateFlag }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flag, setFlag] = useState(uk);

  const setLanguage = (lang) => {
    let newFlag;
    if (lang === "fr") {
      newFlag = fra;
    } else if (lang === "spain") {
      newFlag = spa;
    } else if (lang === "isr") {
      newFlag = isr;
    } else if (lang === "eng") {
      newFlag = uk;
    }
    setFlag(newFlag);
    closeModal();
    updateFlag(lang); // Actualise la langue coté landing
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="modal-container">
      <button className="flag-button" onClick={openModal}>
        <img className="flag" src={flag} alt="flag"></img>
      </button>
      {isModalOpen && (
        <div className="modal-content">
          <button className="flag-button" onClick={() => setLanguage("eng")}>
            <img className="flag" src={uk} alt="english"></img>
          </button>

          <button className="flag-button" onClick={() => setLanguage("isr")}>
            <img className="flag" src={isr} alt="hebrew"></img>
          </button>
          <button className="flag-button" onClick={() => setLanguage("fr")}>
            <img className="flag" src={fra} alt="french"></img>
          </button>

          <button className="flag-button" onClick={() => setLanguage("spain")}>
            <img className="flag" src={spa} alt="spanish"></img>
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;

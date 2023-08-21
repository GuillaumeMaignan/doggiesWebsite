import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../style/contactUs.css";
export default function ContactUs() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ici, vous pouvez ajouter la logique pour traiter les données du formulaire, par exemple, les envoyer à un serveur.

    emailjs
      .sendForm(
        "service_4zsml3w",
        "template_2cemqlg",
        form.current,
        "-x7hToLCJfU_dRlwQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          event.target.reset();
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false); // Cacher le message après 3 secondes
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="containerContact">
      <h2 className="contactTitle">Contact Us</h2>

      <form ref={form} onSubmit={handleSubmit}>
        <div className="contactUs">
          <label className="descriptionP" htmlFor="email">
            Email:
          </label>
          <input
            name="email_id"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label className="descriptionP" htmlFor="description">
            Tell us about your dog and how to pick up:
          </label>
          <textarea
            name="message"
            className="message"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <button className="submitBtn" type="submit">
          Send
        </button>
        {showMessage && (
          <div
            style={{
              backgroundColor: "green",
              color: "white",
              fontSize: 25,
              alignContent: "center",
            }}
          >
            Message sent successfully!
          </div>
        )}
      </form>
    </div>
  );
}

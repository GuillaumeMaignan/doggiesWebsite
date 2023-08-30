import React from "react";
import "../style/myContact.css";

import git from "../assets/picture/git.svg";
import mail from "../assets/picture/mail.svg";
import linkdin from "../assets/picture/linkedin.svg";
import insta from "../assets/picture/insta.svg";
import twitter from "../assets/picture/twitter.svg";
import whatsapp from "../assets/picture/whatsappsvg.svg";

export default function MyContact() {
  return (
    <div className="iconContainer">
      <a href="https://github.com/GuillaumeMaignan">
        <img className="icon" src={git} alt="gitHub"></img>
      </a>
      <a href="mailto:guillaume1507@hotmail.com">
        <img className="icon" src={mail} alt="mail"></img>
      </a>
      <a href="https://www.linkedin.com/in/guillaume-maignan-934985248/">
        <img className="icon" src={linkdin} alt="linkdin"></img>
      </a>
      <a href="https://www.instagram.com/guillaumemaignan/">
        <img className="icon" src={insta} alt="instagram"></img>
      </a>
      <a href="https://github.com/GuillaumeMaignan">
        <img className="icon" src={twitter} alt="gitHub"></img>
      </a>
      <a href="https://wa.me/+33623219644?text=Hi%20,i%20need%20a%20devs%20😀">
        <img className="icon" src={whatsapp} alt="whatsapp"></img>
      </a>
    </div>
  );
}

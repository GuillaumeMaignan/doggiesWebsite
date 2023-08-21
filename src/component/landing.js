import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/landing.css";

// Component import

import Modal from "./modal";

// Image import

import mapdog from "../assets/picture/mapdoggiesiphone.png";
import gb from "../assets/picture/gb.png";
import dogs from "../assets/picture/240678_2_dogs_next_to_each_other_cartoon_style__xl-1024-v1-0.png";
import happyDog from "../assets/picture/happyDog.jpeg";
import dogWalker from "../assets/picture/dog-walker.jpeg";
// import money from "../assets/picture/money.png";

export default function Landing() {
  // Function qui recupere le langage depuis Modal
  const [landingFlag, setLandingFlag] = useState(gb);

  const updateLandingFlag = (lang) => {
    setLandingFlag(lang);
  };
  console.log(landingFlag, "langages selectioné dans le modal");
  return (
    <div className="container">
      <header className="header">
        <Modal updateFlag={updateLandingFlag} />
        {/* Hebreux version :   */}
        {/* <h1 className="title">Hakelaviv </h1>  */}
        {/* >הכלביב  */}

        {/* <a href="https://www.spliiit.com/fr" className="flagPickerButton">
          <img className="flagPicker" src={gb} alt="gbflag"></img>
        </a> */}
        <h1 className="title">Doggies </h1>
      </header>
      <section className="desc">
        <h2>Best dog-Walker, </h2>
        <h2>
          Best Prices in <span className="accroche"> Tel-Aviv </span>{" "}
        </h2>
        <p className="descriptionP">
          30 minute walk: <span className="price">30 ₪</span>
          <br></br> 1 hour walk: <span className="price">40 ₪</span>
        </p>

        <Link to="/contactUs">
          <button className="start"> Let's start</button>
        </Link>
        <img className="money" alt="money" src={dogs}></img>
      </section>
      <section className="appDesc">
        <h1> Stay connected to your dog: </h1>
        <p> You can easly check where is your dog and how he is</p>
        <img src={mapdog} className="descImage" alt="otherDogWalk"></img>
        <h1> Order and manage your walk online: </h1>
        <p> You can easly check where is your dog and how he is</p>
        <img src={mapdog} className="descImage" alt="otherDogWalk"></img>
      </section>
      <section className="concurence">
        <h1> Other dog walker: </h1>
        <img src={dogWalker} className="descImage" alt="otherDogWalk"></img>

        <h1> Doggies: </h1>
        <img src={happyDog} className="descImage" alt="otherDogWalk"></img>
        {/* <img className="descImage" alt="otherDogWalk"></img> */}
      </section>
    </div>
  );
}

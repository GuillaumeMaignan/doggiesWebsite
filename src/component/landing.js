import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/landing.css";

// Component import

import Modal from "./modal";
import MyContact from "./myContact";
// Image import

import mapdog from "../assets/picture/mapdoggiesiphone.png";
import gb from "../assets/picture/gb.png";
import dogs from "../assets/picture/240678_2_dogs_next_to_each_other_cartoon_style__xl-1024-v1-0.png";
import happyDog from "../assets/picture/happyDog.jpeg";
import dogWalker from "../assets/picture/dog-walker.jpeg";
import orderDog from "../assets/picture/order.png";
import pawSeparator from "../assets/picture/pngfind.com-paw-png-327881.png";

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
        <h1 className="title">Akelaviv </h1>

        <Modal updateFlag={updateLandingFlag} />
        {/* Hebreux version :   */}
        {/* <h1 style={{ fontSize: "5rem" }} className="title">הכלביב</h1> */}

        {/* <h1 className="title">Doggies </h1> */}
      </header>
      <section className="desc">
        <h2>Best dog-Walker, </h2>
        <h2>
          Best Prices in <span className="accroche"> Tel-Aviv </span>
        </h2>
        <p className="descriptionP">
          30 minute walk: <span className="price">30 ₪</span>
          <br></br> 1 hour walk: <span className="price">40 ₪</span>
        </p>

        <Link to="/contactUs">
          <button className="start"> Let's start</button>
        </Link>
        <img className="mascotte" alt="mascotte" src={dogs}></img>
      </section>

      <div>
        <svg viewBox="0 0 1440 48" className="bottomSvg">
          <path d="M1440,48H0V0c0,0,205,47,720,47s720-46.9,720-46.9V48z"></path>
        </svg>
        <div className="separator"></div>
        <svg viewBox="0 0 1440 48" className="topSvg">
          <path d="M1440,48H0V0c0,0,205,47,720,47s720-46.9,720-46.9V48z"></path>
        </svg>
      </div>
      <section className="appDesc">
        <div className="module">
          <div className="textContainer">
            <h1> Stay connected to your dog: </h1>
            <p> You can easly check where is your dog and how he is</p>
            <p>
              In the same time our team will send you very cool picture of your
              dog
            </p>
          </div>
          <img src={mapdog} className="descImage" alt="mapDog"></img>
        </div>
        <div className="module">
          <div className="textContainer">
            <h1> Order and manage your walk online: </h1>
            <p> Just symply check your days and timeline in your calendar </p>
          </div>
          <img src={orderDog} className="descImage" alt="orderDog"></img>

          <Link to="/order">
            <button id="joinBtn" className="start">
              Give a try
            </button>
          </Link>
        </div>
      </section>
      <img
        style={{ width: "100vw" }}
        src={pawSeparator}
        alt="pawSeparator"
        className="pawSeparator"
      ></img>
      <section className="appDesc" id="leftDesc">
        <div className="module">
          <div className="textContainer">
            <h1> Other dog walker </h1>
            <p>
              Walking too many dogs compromises individual attention, safety,
              and overall experience. Prioritizing a manageable number ensures
              better care and well-being for dogs and owners.
            </p>
          </div>
          <img
            src={dogWalker}
            className="descImage"
            alt="otherDogWalk"
            id="leftImg"
          ></img>
        </div>
        <div className="module">
          <div className="textContainer">
            <h1>With Akelaviv </h1>
            <p>
              המסעדים שלנו לסיוע בטיולי כלבים מטפחים עד שלושה כלבים במקביל
              ומעניקים להם תשומת לב מיוחדת.
            </p>
          </div>
          <img
            src={happyDog}
            className="descImage"
            alt="happydog"
            id="leftImg"
          ></img>
          {/* <img className="descImage" alt="otherDogWalk"></img> */}
          <Link to="/signUp">
            <button id="joinBtn" className="start">
              Join us
            </button>
          </Link>
        </div>
      </section>
      <section className="contact">
        <MyContact />
        <a
          className="reference"
          href="https://guillaumemaignan.github.io/guillaumeMaignan/"
        >
          Powered by guillaume maignan
        </a>
      </section>
    </div>
  );
}

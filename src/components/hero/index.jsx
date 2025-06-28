import React from "react";
import "./styles.scss";
import earthImg from "../../assets/images/earth.png";
import Button from "../button";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Discover the vast expanses of{" "}
            <span className="hero__title--highlight">space</span>
          </h1>
          <p className="hero__subtitle">
            Where the possibilities are{" "}
            <span className="hero__subtitle--highlight">endless!</span>
          </p>
          <Button variant="primary" className="hero__btn">
            Learn more
          </Button>
        </div>

        <div className="hero__visual">
          <img
            src={earthImg}
            alt="Planet Earth with satellites"
            className="hero__earth-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

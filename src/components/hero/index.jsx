import React from "react";
import "./styles.scss";
import earthImg from "../../assets/images/earth.png";

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
          <button className="hero__btn button button--primary">
            Learn more
          </button>
        </div>

        <div className="hero__visual">
          <img
            src={earthImg}
            alt="Planet Earth with satellites"
            className="hero__earth-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

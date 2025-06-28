import "./styles.scss";
import rocketIcon from "../../assets/icons/rocket.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__icon">
          <img
            src={rocketIcon}
            alt="Rocket Icon"
          />
        </div>
        <p className="footer__text">Exciting space adventure!</p>
      </div>
    </footer>
  );
}

export default Footer;
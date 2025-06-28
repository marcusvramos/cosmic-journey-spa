import "./styles.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__icon">
          <img
            src="/icons/rocket.svg"
            alt="Rocket Icon"
          />
        </div>
        <p className="footer__text">Exciting space adventure!</p>
      </div>
    </footer>
  );
}

export default Footer;
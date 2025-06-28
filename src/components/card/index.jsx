import "./styles.scss";

function Card({
  title,
  subtitle,
  description,
  backgroundImage,
  size = "medium",
}) {
  return (
    <div className={`card card--${size}`}>
      <div
        className="card__background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="card__overlay"></div>

      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__subtitle">{subtitle}</p>

        {description && (
          <div className="card__description">
            <p className="card__text">{description}</p>
          </div>
        )}

        <button className="card__btn button button--secondary" aria-label={`Learn more about ${title}`}>
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Card;

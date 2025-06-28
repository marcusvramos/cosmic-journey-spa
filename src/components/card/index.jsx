import "./styles.scss";
import Button from "../button";

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
        <p className="card__subtitle" dangerouslySetInnerHTML={{ __html: subtitle }}></p>

        {description && (
          <div className="card__description">
            <p className="card__text">{description}</p>
          </div>
        )}

        <Button variant="secondary" className="card__btn" aria-label={`Learn more about ${title}`}>
          Learn more
        </Button>
      </div>
    </div>
  );
}

export default Card;

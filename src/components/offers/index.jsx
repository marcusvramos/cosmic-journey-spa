import Card from "../card";
import "./styles.scss";

function Offers({ cards }) {
  return (
    <section id="products" className="offers" aria-labelledby="offers-title">
      <div className="offers__container">
        <h2 className="offers__title" id="offers-title">Offers</h2>
        <div className="offers__grid">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              backgroundImage={card.backgroundImage}
              size={card.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;
import "./styles.scss";

function TextSection() {
  return (
    <section className="text-section">
      <div className="text-section__container">
        <h2 className="text-section__title">Embark on a space journey</h2>
        <p className="text-section__content">
          Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you 
          have ever dreamed of exploring stars, planets and galaxies, then you realize this dream. We offer a unique experience that will 
          allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be 
          filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and 
          comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
        </p>
        
        <input type="checkbox" id="read-more-toggle" className="text-section__toggle" />
        
        <div className="text-section__expandable">
          <p className="text-section__extra-content">
            Our space journeys include comprehensive training programs, state-of-the-art safety equipment, and experienced astronaut guides. 
            You'll experience weightlessness, see Earth from space, and potentially participate in scientific experiments. Each mission is 
            carefully planned and executed with the highest safety standards. We also offer different duration options, from short 
            suborbital flights to extended orbital stays, allowing you to choose the adventure that best fits your dreams and schedule.
          </p>
          <p className="text-section__extra-content">
            Additionally, our pre-flight preparation includes physical fitness assessments, psychological readiness training, and detailed 
            mission briefings. Post-flight, you'll receive a comprehensive debriefing and commemorative materials to help you preserve 
            these incredible memories forever.
          </p>
        </div>
        
        <label htmlFor="read-more-toggle" className="text-section__read-more">
          <span className="text-section__read-more-text">Read more</span>
          <span className="text-section__read-less-text">Read less</span>
        </label>
      </div>
    </section>
  );
}

export default TextSection;
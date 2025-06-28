import { useState } from "react";
import "./App.scss";

import Header from "./components/header";
import Hero from "./components/hero";
import Offers from "./components/offers";
import Footer from "./components/footer";
import TextSection from "./components/text-section";

import spaceBg1 from "./assets/images/space-bg-1.png";
import spaceBg2 from "./assets/images/space-bg-2.png";
import spaceBg3 from "./assets/images/space-bg-3.png";
import spaceBg4 from "./assets/images/space-bg-4.png";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const cardData = [
    {
      id: 1,
      title: "Move the borders of reality!",
      subtitle: "Go on a space adventure - it's possible with us!",
      backgroundImage: spaceBg1,
      size: "large",
    },
    {
      id: 2,
      title: "Space is not just stars and planets",
      subtitle: "Go on a space adventure",
      backgroundImage: spaceBg2,
      size: "medium",
    },
    {
      id: 3,
      title: "For those who dream of stars",
      subtitle: "Our offer: make your dream come true",
      backgroundImage: spaceBg3,
      size: "medium",
    },
    {
      id: 4,
      title: "Fulfill your fantastic dreams",
      subtitle: "Space has never been so close",
      backgroundImage: spaceBg4,
      size: "large",
    },
  ];

  return (
    <div className="app">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      <main className="app__main">
        <Hero />
        <Offers cards={cardData} />
        <TextSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;

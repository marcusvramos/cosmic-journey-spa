import { useState } from "react";
import "./App.scss";

import Header from "./components/header";
import Hero from "./components/hero";
import Offers from "./components/offers";
import Footer from "./components/footer";
import TextSection from "./components/text-section";
import { cardData } from "./data/card-data";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


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

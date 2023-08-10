import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import CardsContainer from '../CardsContainer/CardsContainer';

import { Element } from 'react-scroll';

const App = () => {
  return (

    <div className='App'>     
      <Element name="header" className="element">
        <Header />
      </Element>
      <main>
        <Element name="hero" className="element">
          <Hero 
            titulo="Rick y Morty" 
            descripcion="La colección"
            txtBtn="Conocé los personajes"
          />
        </Element>
        <Element name="cardsContainer" className="element">
          <CardsContainer  title="Personajes"/>
        </Element>
      </main>
      <Element name="footer" className="element">
        <Footer txt="2023 Rick and Morty. Todos los derechos reservados." />

      </Element>
    </div>
  );
};

export default App;

import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import CardsContainer from '../CardsContainer/CardsContainer';

import Cta from '../Cta/Cta';
import Form from '../Form/Form';

import { Element } from 'react-scroll';

const App = () => {
  const formFields=[
    {
      type: 'email',
      lbl: 'Correo electrónico:'
    }
  ]
  return (

    <div className='App'>     
      <Element name="header" className="element">
        <Header />
      </Element>
      <main>
        <Element name="hero" className="element">
          <Hero 
            titulo="Cuarteto de Nos" 
            descripcion="Banda de rock alternativo originaria de Montevideo, Uruguay."
            txtBtn="Escuchá nuestra música"
          />
        </Element>
        <Element name="cardsContainer" className="element">
          <CardsContainer  title="Discografía"/>
        </Element>
        <Element name="form" className="element">
          <Form  
            title = "Newsletter" 
            desc = "¡Suscríbete a nuestro newsletter para recibir noticias y novedades sobre el Cuarteto de Nos!"
            fields = {formFields}
            txtBtn = "Suscribirse"
          />
        </Element>
        <Element name="cta" className="element">
          <Cta title = "¿Quieres saber más sobre nosotros?" txtBtn="Lee nuestra biografía"/>
        </Element>
      </main>
      <Element name="footer" className="element">
        <Footer txt="2023 Cuarteto de Nos. Todos los derechos reservados." />

      </Element>
    </div>
  );
};

export default App;

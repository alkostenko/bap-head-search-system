import React from 'react';
import './generatePage.css';

import { Navbar } from '../../components';
import Footer from '../../containers/footer/Footer';
import Headline from '../../components';
import Generate from '../../containers/generate/Generate';


const Generate = () => {
  return (
    <section className='generate-page'>
      <Navbar />
      <section className='generate-section'>
        <div className="head">
          <h1>Згенерувати Заяву</h1>
          <Headline />
        </div>
        <div className="generate-component">
          <Generate />
        </div>
      </section>
      <Footer />
    </section>
  )
}

export default Generate
import React from 'react';
import './generatePage.css';

import { Navbar } from '../../components';
import Footer from '../../containers/footer/Footer';
import Headline from '../../components/headline/Headline';
import Generate from '../../containers/generate/Generate';


const GeneratePage = () => {
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

export default GeneratePage
import React from 'react';
import './signupPage.css';

import NavbarRegistration from '../../components/navbar_registration/NavbarRegistration';
import { Headline } from '../../components';
import { Singup } from '../../containers/singup/Singup';
import Footer from '../../containers/footer/Footer';
import Navbar from '../../components/navbar/Navbar';


const SingupPage = () => {
  return (
    <section className='signup-page'>
      <Navbar />
      <section className='signup-section'>
        <div className="head">
          <h1>Запросити реєстрацію</h1>
          <Headline />
        </div>
        <div className="form-section">
          <Singup />
        </div>
      </section>
      <Footer />
    </section>
  )
}

export default SingupPage
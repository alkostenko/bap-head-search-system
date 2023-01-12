import React from 'react';
import './signupPage.css';

import NavbarRegistration from '../../components/navbar/NavbarRegistration';
import { Headline } from '../../components';
import { Singup } from '../../containers/singup/Singup';
import FooterRegistration from '../../containers/footer/FooterRegistration';
import Navbar from '../../components/navbar/Navbar';


const SignupPage = () => {
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
      <FooterRegistration />
    </section>
  )
}

export default SignupPage
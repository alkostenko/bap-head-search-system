import React from 'react';
import NavbarRegistration from '../../components/navbar/NavbarRegistration';
import FooterRegistration from '../../containers/footer/FooterRegistration';
import { Headline } from '../../components';
import Login from '../../containers/login/Login';
import './loginpage.css';

const LoginPage = () => {
  return (  
    <section className='login-page'>
      <NavbarRegistration />
      <section className='login-section'>
        <div className="head">
          <h1>Увійти в аккаунт</h1>
          <Headline />
        </div>
        <div className="form-section">
          <Login />
        </div>
      </section>
      <FooterRegistration />
    </section>
  )
}

export default LoginPage
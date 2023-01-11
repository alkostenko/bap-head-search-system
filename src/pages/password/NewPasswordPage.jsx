import React from 'react';
import NewPassword from '../../containers/password/NewPassword';
import { Headline } from '../../components';
import NavbarRegistration from '../../components/navbar/NavbarRegistration';
import Footer from '../../containers/footer/Footer';
import './newPasswordPage.css'

const NewPasswordPage = () => {
  return (
    <section className='newpassword-page'>
      <NavbarRegistration />
      <section className='newpassword-section'>
        <div className="head">
          <h1>Запросити пароль</h1>
          <Headline />
        </div>
        <div className="form-section">
          <NewPassword />
        </div>
      </section>
      <Footer />
    </section>
  )
}

export default NewPasswordPage
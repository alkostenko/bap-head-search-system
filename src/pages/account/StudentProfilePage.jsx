import React from 'react';
import './profilePage.css';
import { Navbar } from '../../components';
import Footer from '../../containers/footer/Footer';
import Headline from '../../components';
import StudentProfile from '../../containers/profiles/StudentProfile';

const StudentProfilePage = () => {
  return (
    <section className='profile-page'>
      <Navbar />
      <section className='login-section'>
        <div className="head">
          <h1>Мій аккаунт</h1>
          <Headline />
        </div>
        <div className="profile-section">
          <StudentProfile />
        </div>
      </section>
      <Footer />
    </section>
  )
}

export default StudentProfilePage
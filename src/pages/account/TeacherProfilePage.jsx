import React from 'react';
import './profilePage.css';
import NavbarProfessors from '../../components/navbar/NavbarProfessors';
import FooterTeacher from '../../containers/footer/FooterTeacher';
import Headline from '../../components';
import TeachersProfile from '../../containers/profiles/TeachersProfile';

const TeacherProfilePage = () => {
  return (
    <section className='profile-page'>
      <NavbarProfessors />
      <section className='profile-section'>
        <div className="head">
          <h1>Мій аккаунт</h1>
          <Headline />
        </div>
        <div className="info-section">
          <TeachersProfile />
        </div>
      </section>
      <FooterTeacher />
    </section>
  )
}

export default TeacherProfilePage
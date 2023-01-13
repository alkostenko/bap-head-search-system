import React from 'react';
import './profile.css';
import useAuth from '../../hooks/useAuth';


const TeachersProfile = () => {
    const {auth} = useAuth();

  return (
    <div className="profile-container">
      <div className="info-row">
        <div className="info-title">ПІБ</div>
        <div className="account-info">{auth.name}</div>
      </div>
      <div className="info-row">
        <div className="info-title">ПОШТА</div>
        <div className="account-info">{auth.email}</div>
      </div>
      <div className="info-row">
        <div className="info-title">Посада</div>
        <div className="account-info">{auth.position}</div>
      </div>
      <div className="info-row">
        <div className="info-title">Наукові напрямки</div>
        <div className="account-info">{auth.knowledge}</div>
      </div>
      <div className="info-row">
        <div className="info-title">Максимальна кількість студентів</div>
        <div className="account-info">{auth.max_students}</div>
      </div>
      <div className="info-row">
        <div className="info-title">Вільних місць</div>
        <div className="account-info">{auth.max_students-auth.accepted_students}</div>
      </div>
      <button className='button-form'>Вийти з аккаунту</button>
    </div>
  )
}

export default TeachersProfile
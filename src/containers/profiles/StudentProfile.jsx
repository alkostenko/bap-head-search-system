import React from 'react';
import './profile.css';
import useAuth from '../../hooks/useAuth';

const StudentProfile = () => {
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
        <div className="info-title">Факультет</div>
        <div className="account-info">{auth.faculty}</div>
      </div>
      <div className="info-row">
        <div className="info-title">Група</div>
        <div className="account-info">{auth.group}</div>
      </div>
      <div className="info-row-change">
        <div className="info-row">
          <div className="info-title">Тема</div>
          <div className="account-info">{auth.topic}</div>
        </div>
        <button className='change'>Змінити тему</button>
      </div>
      <div className="info-row">
        <div className="info-title">Викладач</div>
        <div className="account-info">{auth.teacher}</div>
      </div>
      <button className='button-form'>Вийти з аккаунту</button>
    </div>
  )
}

export default StudentProfile
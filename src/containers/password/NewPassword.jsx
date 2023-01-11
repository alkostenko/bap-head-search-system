import React from 'react';
import './newPassword.css';

const PasswordRequest = (e)=>{

}

const NewPassword = () => {
  return (
    <div className='newpassword-form'>
                <form onSubmit={PasswordRequest}>
                    <label htmlFor="email">ПОШТА</label>
                    <input 
                        type="email" 
                        id="email" 
                        autoComplete='off'
                        placeholder='email@example.com'
                        required
                    />
                    <button className='button-form'>Запросити пароль</button>
                </form>
                <div className='links'>
                    <a href="#" className='link-form'>Згадав пароль?</a>
                    <a href="#" className='link-form'>Немає аккаунту</a>
                </div>
            </div>
  )
}

export default NewPassword
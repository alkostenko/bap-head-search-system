import React from 'react';
import './signup.css';

const RegestrationRequest = (e) => {

}

export const Singup = () => {
  return (
    <div className='regestration-request-form'>
                <form onSubmit={RegestrationRequest}>
                    <label htmlFor='name'>ПІБ</label>
                    <input type="text" id="name" placeholder='Петров Петро Петрович' required/>

                    <label htmlFor="email">ПОШТА</label>
                    <input 
                        type="email" 
                        id="email" 
                        autoComplete='off'
                        placeholder='email@example.com'
                        required
                    />

                    <label htmlFor="faculty">Факультет</label>
                    <input 
                        type="text" 
                        id="faculty"
                        placeholder='ФПМ'
                        required
                    />

                    <label htmlFor="group">Група</label>
                    <input 
                        type="text" 
                        id="group"
                        placeholder='КМ-93'
                        required
                    />
                    <button className='button-form'>Запросити реєстрацію</button>
                </form>
                <div className='links'>
                    <a href="#" className='link-form'>Є аккаунт?</a>
                </div>
            </div>
  )
}

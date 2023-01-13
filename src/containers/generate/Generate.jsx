import React from 'react';
import './generate.css';
import { Link, useNavigation, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ReactDropdown from 'react-dropdown';
import DragAndDrop from '../../components/drag_and_drop/DragAndDrop';


const Generate = () => {
    const {auth} = useAuth();

    const defaultOption=auth.teacher;
    const options=[
        {/* get teachers from DB */}
    ];

    const handleSubmit = async (e) =>{

    }

  return (
    <div className='generate-form'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>ПІБ СТУДЕНТА</label>
            <input
                type="text"
                id="name"
                autoComplete='on'
                value={auth.name}
                placeholder='Петров Петро Петрович'
                required 
            />

            <label htmlFor='thesis'>ТЕМА БАР</label>
            <input
                type="text"
                id="thesis"
                autoComplete='on'
                value={auth.thesis}
                placeholder='Тема моєї випускної роботи...'
                required 
            />
            <label htmlFor='teacher'>Викладач</label>
            <ReactDropdown
                id='reacher'
                options={options}
                onChange={this._onSelect}
                value={defaultOption}
                placeholder="Select an option"
                className='dropdown'
                required
            />

            <label htmlFor='signature'>ПІДПИС СТУДЕНТА</label>
            <DragAndDrop 
                id='signature'
            />
            <button className='button-form'>Згенерувати Заяву</button>
        </form>
    </div>
  )
}

export default Generate
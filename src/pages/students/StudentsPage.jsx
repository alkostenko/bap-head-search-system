import React from 'react';
import './students.css';

import StudentList from '../../containers/student_list/StudentList';
import { Navbar } from '../../components';
import FooterTeacher from '../../containers/footer/FooterTeacher';
import Headline from '../../components/headline/Headline';

const StudentsPage = () => {
  return (
    <section className='students-page'>
        <Navbar />
        <section className='students-section'>
            <div className="head">
            <h1>Мої студенти</h1>
            <Headline />
            </div>
            <div className="table-container">
                <div className="table">
                    <div className="header row">
                        <h4 className="column-name st-name">ПІБ студента</h4>
                        <h4 className="column-name st-email">Пошта</h4>
                        <h4 className="column-name st-thesis">Тема БАР</h4>
                    </div>
                    <div className="table-rows">
                        <StudentList />
                    </div>
                </div>
            </div>
        </section>
        <FooterTeacher />
    </section>
  )
}

export default StudentsPage
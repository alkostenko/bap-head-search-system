import React from 'react';
import './students.css';

import StudentList from '../../containers/student_list/StudentList';
import { Navbar } from '../../components';
import FooterTeacher from '../../containers/footer/FooterTeacher';
import Headline from '../../components/headline/Headline';

const StudentsPage = () => {
  return (
    <section>
        <Navbar />
        <section>
            <div className="head">
            <h1>Мої студенти</h1>
            <Headline />
            </div>
            <div className="table">
                <div className="headline">
                    <h4 className="column-name">ПІБ студента</h4>
                    <h4 className="column-name">Тема БАР</h4>
                </div>
                <div className="table-rows">
                    <StudentList />
                </div>
            </div>
        </section>
        <FooterTeacher />
    </section>
  )
}

export default StudentsPage
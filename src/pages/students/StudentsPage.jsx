import React from 'react';
import './students.css';

import StudentList from '../../containers/student_list/StudentList';
import { Navbar } from '../../components';
import Footer from '../../containers/footer/Footer';
import Headline from '../../components';

const StudentsPage = () => {
  return (
    <section>
        <Navbar />
        <section>
            <div className="head">
            <h1>Студенти в черзі</h1>
            <Headline />
            </div>
            <div className="table">
                <div className="headline">
                    <h4 className="column-name">ПІБ студента</h4>
                    <h4 className="column-name">Тема БАР</h4>
                </div>
                <div className="table-rows">
                    <ProfessorsList />
                </div>
            </div>
        </section>
        <Footer />
    </section>
  )
}

export default StudentsPage
import React from 'react';
import './professors.css';

import ProfessorsList from '../../containers/professors_list/ProfessorsList';
import ProfessorPopups from '../../containers/professor_popups/ProfessorPopups';
import { Navbar } from '../../components';
import Footer from '../../containers/footer/Footer';
import Headline from '../../components/headline/Headline';

const ProfessorsPage = () => {
  return (
    <section className='professors-page'>
      <Navbar />
      <section className='professors-section'>
          <div className="head">
            <h1>Викладачі</h1>
            <Headline />
          </div>
          <div className="table-container">
            <div className="table">
                <div className="header row">
                    <h4 className="column-name name">ПІБ викладача</h4>
                    <h4 className="column-name area">Напрямки</h4>
                    <h4 className="column-name progress">Затверджено</h4>
                    <h4 className="column-name wait">Очікують</h4>
                    <div className='button-column'></div>
                </div>
                <div className="table-rows">
                    <ProfessorsList />
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </section>
  )
}

export default ProfessorsPage
import React from 'react';
import './professors.css';

 import ProfessorsList from '../../containers/professors_list/ProfessorsList';
 import ProfessorPopups from '../../containers/professor_popups/ProfessorPopups';
 import { Navbar } from '../../components';
 import Footer from '../../containers/footer/Footer';
 import Headline from '../../components';

const Professors = () => {
  return (
    <section>
      <Navbar />
      <section>
          <div className="head">
            <h1>Викладачі</h1>
            <Headline />
          </div>
          <div className="table">
              <div className="headline">
                  <h4 className="column-name">ПІБ викладача</h4>
                  <h4 className="column-name">Напрямки</h4>
                  <h4 className="column-name">Затверджено</h4>
                  <h4 className="column-name">Очікують</h4>
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

export default Professors
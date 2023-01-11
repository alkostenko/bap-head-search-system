import {React, useState, useEffect} from 'react';
import './professorsList.css';

import '../../App';
import API_URL from '../../API';
import axios from 'axios';

// list of professors
const ProfessorsList = () => {

  const [professors, setProfessors] = useState([]);

  useEffect(()=>{
    axios.get(API_URL).then(res=>{
      console.log(res.data)
      setProfessors(res.data)
    }).catch(err=>console.log(err))
  }, []);

  return (
    <div className='professors-list'>
      {professors.map((professor)=>(
        <div key={professor.id} className='row-border'>
          <div className='row'>
          <p class='professor-name'>{professor.name}</p>
          <div class='knowledge-area'>
            <img src="/src/assets/info_circle.png" alt="" class='info-icon'/>
            <p className='professor-knowledge'>{professor.area}</p>
          </div>
          <div className='progress-bar'>
            <div className="progress-bar-bottom">
              <p className="number">{professor.total}</p>
            </div>
            <div className="progress-bar-top" style={{width:'calc(({professor.approved}/{professor.total})*100%)'}}>
              <p className="number">{professor.approved}</p>
            </div>
          </div>
          <p className="waiting">{professor.waiting}</p>
          <button className='choose'>Обрати</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProfessorsList
import React from 'react';
import './studentList.css';
import { useEffect, useState } from 'react';

import '../../App';
import API_URL from '../../API';
import axios from 'axios';

const StudentList = () => {

  const [students, setStudents] = useState([]);

  useEffect(()=>{
    axios.get(API_URL).then(res=>{
      console.log(res.data)
      setStudents(res.data)
    }).catch(err=>console.log(err))
  }, []);

  return (
    <div className='students-list'>
      {students.map((student)=>(
        <div key={student.id} className='row-border'>
          <div className='row'>
            <p class='student-name'>{student.name}</p>
            <div class='topic'>
              <img src="/src/assets/info_circle.png" alt="" class='info-icon'/>
              <p className='student-topic'>{student.thesis}</p>
            </div>
            <button className='choose'>Затвердити</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StudentList
import React from 'react';
import './buttons.css';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <Link to={"/"} activeClassName={"button-active"}>
      <div className='cta-link'>
        <div className='cta'>
          <p>Підписати Заяву</p>
        </div>
      </div>
    </Link>
  )
}

export default CTA
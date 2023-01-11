import React from 'react';
import './thanksPage.css';

import Thanks from '../../containers/thanks_popup/Thanks';
import { Headline, Navbar } from '../../components';
import Footer from '../../containers/footer/Footer';

const ThanksPage = () => {
  return (
    <section>
        <Navbar/>
        <section>
            <div className="head">
                <h1>Викладачі</h1>
                <Headline />
            </div>
            <Thanks />
        </section>
        <Footer />
    </section>
  )
}

export default ThanksPage
import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import Faqs2 from '../components/faqs/Faqs2';
import Footer from '../components/footer';
import dataFaqs from '../assets/fake-data/data-faq';


function Faq02(props) {
    return (
        <div className='page-faq'>

            <PageTitle title='Faq' />

            <Faqs2 data={dataFaqs} />

            <Footer />
            
        </div>
    );
}

export default Faq02;
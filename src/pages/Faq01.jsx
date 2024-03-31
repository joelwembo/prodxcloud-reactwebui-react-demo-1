import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import Faqs from '../components/faqs/Faqs';
import Footer from '../components/footer';
import dataFaqs from '../assets/fake-data/data-faq';


function Faq01(props) {
    return (
        <div className='page-faq'>

            <PageTitle title='Faq' />

            <Faqs data={dataFaqs} />

            <Footer />
            
        </div>
    );
}

export default Faq01;
import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import About1 from '../components/about/About1';
import Partner from '../components/partner/Partner';
import Footer from '../components/footer';
import dataAbout from '../assets/fake-data/data-about';
import dataPartner from '../assets/fake-data/data-partner';
import Team2 from '../components/team/Team2';
import dataTeam from '../assets/fake-data/data-team';

function About01(props) {
    return (
        <div className='page-about home-1'>
            <PageTitle title='About Us' />

            <About1 data={dataAbout} />

            <Team2 data={dataTeam} />

            <Partner data={dataPartner} />

            <Footer />
            
        </div>
    );
}

export default About01;
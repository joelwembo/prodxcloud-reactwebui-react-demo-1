import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import About2 from '../components/about/About2';
import Team from '../components/team/Team';
import Partner from '../components/partner/Partner';
import Footer from '../components/footer';
import dataAbout from '../assets/fake-data/data-about';
import dataTeam from '../assets/fake-data/data-team';
import dataPartner from '../assets/fake-data/data-partner';

function About02(props) {
    return (
        <div className='page-about home-1'>

            <PageTitle title='About Us' />
            <About2 data={dataAbout} />

            <Team data={dataTeam} />
            <Partner data={dataPartner} />

            <Footer />
            
        </div>
    );
}

export default About02;
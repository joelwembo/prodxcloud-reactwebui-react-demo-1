import React from 'react';
import dataAbout from '../assets/fake-data/data-about';
import dataBanner from '../assets/fake-data/data-banner';
import dataCollection from '../assets/fake-data/data-collection';
import dataFaqs from '../assets/fake-data/data-faq';
import dataPartner from '../assets/fake-data/data-partner';
import dataRoadmap from '../assets/fake-data/data-roadmap';
import dataTeam from '../assets/fake-data/data-team';
import dataWork from '../assets/fake-data/data-work';

import About1 from '../components/about/About1';
import Banner01 from '../components/banner/Banner01';

import Collection from '../components/collection/Collection';

import Faqs from '../components/faqs/Faqs';
import Footer from '../components/footer';

import Logo from '../components/logo/Logo';
import Partner from '../components/partner/Partner';
import RoadMap from '../components/roadmap/RoadMap';
import Team from '../components/team/Team';


import Work from '../components/work/Work';


function Home01(props) {

    return (
        <div className="home-1">
            <Banner01 data={dataBanner} />

            <Logo />

            <About1 data={dataAbout} />

            <Collection data={dataCollection} />


            <RoadMap data={dataRoadmap} />

            <Work data={dataWork} />

            <Team data={dataTeam} />
            
            <Faqs data={dataFaqs} />

            <Partner data={dataPartner} />

           
           <Footer />
           
        </div>

    );
}

export default Home01;
import React from 'react';
import dataAbout from '../assets/fake-data/data-about';
import dataCollection from '../assets/fake-data/data-collection';
import dataFaqs from '../assets/fake-data/data-faq';
import dataRoadmap from '../assets/fake-data/data-roadmap';
import dataTeam from '../assets/fake-data/data-team';
import dataWork from '../assets/fake-data/data-work';
import About2 from '../components/about/About2';
import Banner02 from '../components/banner/Banner02';
import Collection01 from '../components/collection/Collection01';
import Faqs2 from '../components/faqs/Faqs2';

import Footer2 from '../components/footer/Footer2';
import RoadMap2 from '../components/roadmap/RoadMap2';
import Team from '../components/team/Team';
import Work02 from '../components/work/Work02';



function Home02(props) {

    return (
        <div className='home-2'>
            
            <Banner02 />
            
            <Work02 data={dataWork} />

            <About2 data={dataAbout} />


            <Collection01 data={dataCollection} />

            <RoadMap2 data={dataRoadmap} />


            <Team data={dataTeam} />

            <Faqs2 data={dataFaqs} />
            <Footer2 />
            
        </div>
    );
}

export default Home02;
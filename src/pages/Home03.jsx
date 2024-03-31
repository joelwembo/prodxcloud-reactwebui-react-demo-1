import React from 'react';
import Banner03 from '../components/banner/Banner03';
import dataBanner from '../assets/fake-data/data-banner';
import Collection03 from '../components/collection/Collection03';
import RoadMap03 from '../components/roadmap/RoadMap03';
import Partner from '../components/partner/Partner';
import Faqs2 from '../components/faqs/Faqs2';
import Footer2 from '../components/footer/Footer2';
import Team2 from '../components/team/Team2';
import dataPartner from '../assets/fake-data/data-partner';
import dataTeam from '../assets/fake-data/data-team';
import dataFaqs from '../assets/fake-data/data-faq';
import dataCollection from '../assets/fake-data/data-collection';
import About3 from '../components/about/About3';
import dataAbout from '../assets/fake-data/data-about';
import Work02 from '../components/work/Work02';
import dataWork from '../assets/fake-data/data-work';
import dataRoadmap2 from '../assets/fake-data/data-roadmap-2';



function Home03(props) {
    return (
        <div className='home-3 home-1'>

            <Banner03 data={dataBanner} />

            <Collection03 data={dataCollection} />

            <About3 data={dataAbout} />

            <Work02 data={dataWork} />

            <RoadMap03 data={dataRoadmap2} />

            <Team2 data={dataTeam} />

            <Partner data={dataPartner} />

            <Faqs2 data={dataFaqs} />
            <Footer2 />
            
        </div>
    );
}

export default Home03;
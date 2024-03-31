import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import RoadMap from '../components/roadmap/RoadMap';
import Footer from '../components/footer';
import dataRoadmap from '../assets/fake-data/data-roadmap';


function RoadMap03(props) {
    return (

        <div className='page-roadmap'>
             <PageTitle title='Road Map' />
            <RoadMap data={dataRoadmap} />
            <Footer />
        </div>
       
    );
}

export default RoadMap03;
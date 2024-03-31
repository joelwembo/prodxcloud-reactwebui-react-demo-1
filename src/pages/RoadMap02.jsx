import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import Footer from '../components/footer';
import RoadMap2 from '../components/roadmap/RoadMap2';
import dataRoadmap from '../assets/fake-data/data-roadmap';


function RoadMap02(props) {
    return (
        <div className='page-roadmap'>
            <PageTitle title='Road Map' />
            <RoadMap2 data={dataRoadmap} />
            <Footer />
        </div>
    );
}

export default RoadMap02;
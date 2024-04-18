import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import TestimonialHomeEight from '../HomeEight/TestimonialHomeEight';
import WorkPartHomeEight from '../HomeEight/WorkPartHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import FunFactHomeThree from '../HomeThree/FunFactHomeThree';
import ServicesHomeThree from '../HomeThree/ServicesHomeThree';
import Drawer from '../Mobile/Drawer';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';

function AboutUsTwo() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews action={drawerAction.toggle} />
            <HeroNews
                title="About Us 2"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/about-us-another', title: 'About us' },
                ]}
            />
            <ServicesHomeThree style={{ paddingTop: '90px' }} />
            <FunFactHomeThree />
            <WorkPartHomeEight className="pt-100" />
            <TestimonialHomeEight />
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default AboutUsTwo;

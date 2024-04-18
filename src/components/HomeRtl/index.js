import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import BlogHomeOne from '../HomeOne/BlogHomeOne';
import FaqHomeOne from '../HomeOne/FaqHomeOne';
import FeaturesHomeOne from '../HomeOne/FeaturesHomeOne';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import HeroHomeOne from '../HomeOne/HeroHomeOne';
import HomeOneHeader from '../HomeOne/HomeOneHeader';
import PricingHomeOne from '../HomeOne/PricingHomeOne';
import ProjectHomeOne from '../HomeOne/ProjectHomeOne';
import ServicesHomeOne from '../HomeOne/ServicesHomeOne';
import TeamHomeOne from '../HomeOne/TeamHomeOne';
import TestimonialHomeOne from '../HomeOne/TestimonialHomeOne';
import TrafficHomeOne from '../HomeOne/TrafficHomeOne';
import Drawer from '../Mobile/Drawer';
import BlogHomeRtl from './BlogHomeRtl';
import FaqHomeRtl from './FaqHomeRtl';
import FeaturesHomeRtl from './FeaturesHomeRtl';
import FooterHomeRtl from './FooterHomeRtl';
import HeaderHomeRtl from './HeaderHomeRtl';
import HeroHomeRtl from './HeroHomeRtl';
import PricingHomeRtl from './PricingHomeRtl';
import ProjectHomeRtl from './ProjectHomeRtl';
import ServicesHomeRtl from './ServicesHomeRtl';
import TeamHomeRtl from './TeamHomeRtl';
import TestimonialHomeRtl from './TestimonialHomeRtl';
import TrafficHomeRtl from './TrafficHomeRtl';

function HomeRtl() {
    const html = document.getElementsByTagName('html');
    const [lang, setLang] = useToggle(true);
    const [drawer, drawerAction] = useToggle(false);
    useEffect(() => {
        if (lang) {
            html[0].lang = 'ar';
            html[0].dir = 'rtl';
        } else {
            html[0].lang = 'en';
            html[0].dir = '';
        }
        return () => {
            html[0].lang = 'en';
            html[0].dir = '';
        };
    });
    return (
        <>
            {lang ? (
                <>
                    <Drawer lang={lang} drawer={drawer} action={drawerAction.toggle} />
                    <HeaderHomeRtl
                        lang={lang}
                        langEnabled="true"
                        changeModeLan={setLang.toggle}
                        action={drawerAction.toggle}
                        className="appie-header-area-rtl"
                    />
                    <HeroHomeRtl />
                    <ServicesHomeRtl />
                    <FeaturesHomeRtl />
                    <TrafficHomeRtl className="appie-traffic-area-rtl" />
                    <TestimonialHomeRtl />
                    <TeamHomeRtl />
                    <PricingHomeRtl />
                    <FaqHomeRtl className="appie-faq-area-rtl" />
                    <BlogHomeRtl />
                    <ProjectHomeRtl className="appie-project-area-rtl" />
                    <FooterHomeRtl />
                    <BackToTop />
                </>
            ) : (
                <>
                    <Drawer drawer={drawer} action={drawerAction.toggle} />
                    <HomeOneHeader
                        langEnabled="true"
                        lang={lang}
                        changeModeLan={setLang.toggle}
                        action={drawerAction.toggle}
                    />
                    <HeroHomeOne />
                    <ServicesHomeOne />
                    <FeaturesHomeOne />
                    <TrafficHomeOne />
                    <TestimonialHomeOne />
                    <TeamHomeOne />
                    <PricingHomeOne />
                    <FaqHomeOne />
                    <BlogHomeOne />
                    <ProjectHomeOne />
                    <FooterHomeOne />
                    <BackToTop />
                </>
            )}
        </>
    );
}

export default HomeRtl;

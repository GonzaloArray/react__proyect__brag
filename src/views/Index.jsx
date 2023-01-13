import React from 'react'
import { ComunityIdea } from '../components/Index/LandingPage/ComunityIdea';
import { LandingPage } from '../components/Index/LandingPage/LandingPage';
import { SectionInfo } from '../components/Index/LandingPage/SectionInfo';

const Index = () => {
    return (
        <>
            <LandingPage />
            <SectionInfo />
            <ComunityIdea />
        </>
    )
}
export default Index;
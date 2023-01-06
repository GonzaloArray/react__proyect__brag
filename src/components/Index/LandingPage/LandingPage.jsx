import { LandingSectionInfo } from './LandingSectionInfo'
import './LandingPage.css'
import Grab from '../../../assets/logo_brag.png'


export const LandingPage = () => {
    return (
        <>
            <section className="background-circle banner-animado">
                <LandingSectionInfo />
                <div className="background-container">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <img src={Grab} className="img__landing" alt="Brad - Task manager" />
                </div>
            </section>
        </>
    )
}

import { LandingSectionInfo } from './LandingSectionInfo'
import './LandingPage.css'
import Grab from '../../../assets/logo_brag.png'


export const LandingPage = () => {
    return (
        <>
            <section className="background-circle banner-animado">
                <div className='container d-md-flex justify-content-md-between'>
                    <LandingSectionInfo />
                    <div className="background-container">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <img src={Grab} className="img__landing" alt="Brad - Task manager" />
                </div>
            </section>
        </>
    )
}

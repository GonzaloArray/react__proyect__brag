import React from 'react'
import ImgSection from '../../../assets/easy__compresing.svg'
import './LandingPage.css'


export const SectionInfo = () => {
    return (
        <section className='container py-3'>

            <div className='d-flex flex-column gap-5 flex-md-row align-items-center align-items-md-start justify-content-center justify-content-between mt-5'>
                <section>
                    <div className=''>
                        <h2 className='fw-bold '>USE GRAB</h2>
                        <p>Do you want to have your tasks organized?
                            Here you can put your tasks in order, with completion day.</p>
                    </div>
                    <div>
                        <h2 className='fw-bold fs-4'>Take solution</h2>
                        <p className='d-none d-md-block'>Keep an order of your meeting schedules and objectives, their summary and all the notes and documents that you wish to attach.</p>
                    </div>
                </section>
                <img className='sc-img' src={ImgSection} alt="Easy comprensing" />
            </div>
        </section>
    )
}

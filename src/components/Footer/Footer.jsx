import { motion } from 'framer-motion'
import './Footer.css'
import ft__img from '../../assets/undraw_new_year_2023_pfnc.svg'

export const Footer = () => {
    return (
        <footer className='bg-dark pt-5 position-relative'>
            <img src={ft__img} alt="Happy 2023" className='position-absolute ft-img-happy'/>
            <section className='container'>
                <div className='row text-light gap-4 justify-content-center'>
                    <div className='col-12 col-md-3'>
                        <motion.h2 className='fs-4'>In the news</motion.h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas velit ullam, alias sequi totam consequuntur voluptatem molestias voluptate doloribus quod dicta fugiat fugit inventore impedit libero dolore repellendus ipsa.
                        </p>
                    </div>
                    <div className='col-12 col-md-2'>
                        <motion.h2 className='fs-4'>Get social</motion.h2>

                        <div className='d-flex flex-column gap-2'>
                            <a className='nav-link ft-hover-link' href="#">Contact: <span>+54 9 11 2323-1223</span></a>
                            <a className='nav-link ft-hover-link' href="#">Email: <span>contact@brag.com</span></a>
                            <a className='nav-link ft-hover-link' href="#">Brag - Task solution</a>
                            <a className='nav-link ft-hover-link' href="#">Intagram - <span>@brag-solution</span></a>
                        </div>
                    </div>
                    <div className='col-12 col-md-3'>
                        <motion.h2 className='fs-4'>Get in touch</motion.h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti possimus fugit, similique asperiores porro velit repellat qui eligendi! Eum veritatis commodi ipsa non, quisquam officia quo officiis laboriosam blanditiis repudiandae.</p>
                    </div>
                    <div className='col-12 col-md-3'>
                        <motion.h2 className='fs-4'>Proyect inquiere</motion.h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit iusto, id eius quisquam veritatis tenetur aliquam saepe neque, pariatur deserunt rerum maxime explicabo error ad minus aspernatur dicta praesentium voluptas.</p>
                    </div>
                </div>
            </section>
            <section className='ft-bg-copy py-3 d-flex align-items-center justify-content-center mt-5'>
                <h2 className='text-center fs-6 m-0'>Brag hight solution - @copyright 2023</h2>
            </section>
        </footer>
    )
}

import { motion } from "framer-motion"

import Idea from '../../../assets/undraw_button_style_re_uctt.svg'
import check from '../../../assets/relax.svg'
import ease from '../../../assets/undraw_react_re_g3ui.svg'

export const ComunityIdea = () => {
    return (
        <section className="container mt-4">

            <h2 className='fw-bold fs-1 text-center mb-5'>Comunity idea</h2>

            <div className='d-flex justify-content-between gap-2'>
                <motion.img
                    animate={{ x: [0, 100, 0] }}
                    className='ci-img'
                    src={Idea} alt="Easy compresing"
                    loading='lazy'
                />
                <motion.img
                    animate={{
                        x: [null, 100, 0],
                        y: [0, 100, 0]
                    }}
                    className='ci-img'
                    src={check} alt="Easy Check"
                    loading='lazy'
                />
                <motion.img
                    animate={{ x: [0, 50, 0] }}
                    className='ci-img'
                    src={ease} alt="Easy Ease"
                    loading='lazy'
                />
            </div>
            
        </section>
    )
}

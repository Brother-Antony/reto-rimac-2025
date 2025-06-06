import { useNavigate } from 'react-router-dom'

import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <>
            <div className='border border-[var(--neutrals2)]'>
                <Header/>
            </div>

            <section className="container mt-[40px] mb-[60px] text-center">
                <i className='fad fa-outlet text-[54px] text-[var(--red5)] mr-[1rem]'></i>
                <i className='fad fa-plug text-[54px] text-[var(--red5)]'></i>
                <div className='text-[var(--neutrals7)] text-8xl font-bold my-4'>404</div>
                <div className='text-[var(--gray60)] font-bold text-2xl'>No routes matched location</div>
                <div className='mt-6 text-[var(--neutrals6)] text-base'>La página que estás buscando no se encontró. <br /> Comprueba la URL o regresa al <button type='button' onClick={() => navigate(-1)} className='underline text-[var(--red5)] font-bold'>Inicio de sesión</button></div>
            </section>

            <Footer/>
        </>
    )
}

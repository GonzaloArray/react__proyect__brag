import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'
import { NavBar } from './Header/Navbar/NavBar'

export const Layout = () => {

    return (
        <>
            <header>
                <NavBar />

            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

import "./_navbar.css";
import logo from "../assets/img/coronavirus.png";



const Navbar = () => {
  return (
    <>
        <header>
            <a href="/">< img src={logo} className="logo_navbar" alt="logo"/></a>
            <nav>
                <a href="/tracker2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-pie-2" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#212875" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 3v9h9" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                </svg></a>

                <a href="/tracker2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#212875" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
                </svg></a>

                <a href="/tracker2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-category" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#212875" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 4h6v6h-6z" />
                <path d="M14 4h6v6h-6z" />
                <path d="M4 14h6v6h-6z" />
                <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                </svg></a>

                <a href="/tracker2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-folder" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#212875" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                </svg></a>

                <a href="/tracker2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-files" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#212875" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
                <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                </svg></a>

                <a href="/tracker2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-line" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#212875" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 19l16 0" />
                <path d="M4 15l4 -6l4 2l4 -5l4 4" />
                </svg></a>

                <a href="/tracker2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#212875" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M3.6 9h16.8" />
                <path d="M3.6 15h16.8" />
                <path d="M11.5 3a17 17 0 0 0 0 18" />
                <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg></a>

                <a href="/tracker2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-dots" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#212875" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                <path d="M12 11l0 .01" />
                <path d="M8 11l0 .01" />
                <path d="M16 11l0 .01" />
                </svg></a>
            </nav>

            <a href="/"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-circle-horizontal" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#212875" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M8 12l0 .01" />
            <path d="M12 12l0 .01" />
            <path d="M16 12l0 .01" />
            </svg></a>

        </header>
    
    </>
  )
}

export default Navbar
'use client';
const Header = () => {

    function scrollToSection(event: any, sectionId: string) {
        if (!event || !sectionId) {
            console.error('Missing event or sectionId parameter');
            return;
        }
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (!section) {
            console.error(`Element with id ${sectionId} not found`);
            return;
        }
        section.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <>
        <header className="sticky top-0 z-50">
            <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Menu movil">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={(event) => scrollToSection(event, 'hero')}><a>Inicio</a></li>
                    <li onClick={(event) => scrollToSection(event, 'about')}><a>Acerca de mi</a></li>
                    <li onClick={(event) => scrollToSection(event, 'projects')}><a>Proyectos</a></li>
                    <li onClick={(event) => scrollToSection(event, 'skills')}><a>Habilidades</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Lucas Dev</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li onClick={(event) => scrollToSection(event, 'hero')}><a>Inicio</a></li>
                    <li onClick={(event) => scrollToSection(event, 'about')}><a>Acerca de mi</a></li>
                    <li onClick={(event) => scrollToSection(event, 'experience')}><a>Experiencia</a></li>
                    <li onClick={(event) => scrollToSection(event, 'projects')}><a>Proyectos</a></li>
                    <li onClick={(event) => scrollToSection(event, 'skills')}><a>Habilidades</a></li>
                    <li onClick={(event) => scrollToSection(event, 'achievements')}><a>Reconocimientos</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://drive.google.com/file/d/1Ap4fyVjgYM8efNYINmE1dbeg8kHycQvj/view" target="_blank" className="btn">CV</a>            
            </div>
            </div>
        </header>
    </>
  )
}

export default Header
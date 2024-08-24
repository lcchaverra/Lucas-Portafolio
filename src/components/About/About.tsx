const About = () => {
  return (
    <>
        <div className="flex flex-col w-full lg:flex-row bg-base-300 pt-2" id="about">
            {/* Item 1  */}
            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="hero bg-base-200 h-full">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Acerca de mi</h1>
                        <p className="py-4">Desarrollador de software con experiencia en el diseño, desarrollo y mantenimiento de aplicaciones web utilizando tecnologías como React JS. He trabajado en proyectos tanto en el frontend como en el backend, utilizando frameworks como ASP.Net Core. Me destaco por mi capacidad para resolver problemas de manera eficiente y creativa, así como por mi habilidad para trabajar en equipo y colaborar en entornos diversos, contribuyendo al crecimiento y éxito de las empresas para las que he trabajado.</p>
                        <p className="py-2">Soy un estudiante autodidacta, con lo cual me mantengo al día con las tecnologías, he realizado Diplomados, Cursos y Bootcamps de desarrollo de software para afianzar mis conocimientos.</p>
                        {/* <p className="py-6">provengo de Quibdó – Chocó, Colombia, actualmente estoy perfeccionando mis habilidades en el desarrollo móvil.</p> */}
                        </div>
                    </div>
                </div>
            </div> 
            {/* Divider */}
            <div className="mx-0 bg-base-300 divider lg:divider-horizontal">O</div> 
            {/* Item 2 */}
            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="hero bg-base-200 h-full">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Experiencia</h1>
                        <p className="py-6">Algunas de mis experiencias mas destacadas son:</p>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" id="experience-1" name="my-accordion-3" placeholder="."/> 
                                <label htmlFor="experience-1"></label>    
                                <div className="collapse-title text-xl font-medium">
                                    Junior Software Developer | HelppeopleCloud (Nov 2023 - Actualidad)
                                </div>
                                <div className="collapse-content"> 
                                    <p>
                                        Creación de requerimientos y asistencia técnica para aplicaciones web.
                                        Uso de tecnologías avanzadas como React JS y ASP.NET Core.
                                        Colaboración con metodologías ágiles para mejorar la eficacia y experiencia del usuario.
                                        Trabajo en equipo con otros profesionales para soluciones innovadoras y desafíos técnicos.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" id="experience-3" name="my-accordion-3" placeholder="."/> 
                                <label htmlFor="experience-3"></label> 
                                <div className="collapse-title text-xl font-medium">
                                    Pasante | Rentic SAS (Mar 2023- Jun 2023)
                                </div>
                                <div className="collapse-content"> 
                                    <p>
                                        Creé una plataforma en línea para supervisar sistemas de energía renovable sostenible.
                                        Opté por Makoserver y el lenguaje Lua para desarrollar una solución escalable y efectiva.
                                        Ayudé a mejorar la eficacia y sostenibilidad de las operaciones de la empresa con esta
                                        herramienta innovadora.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" id="experience-2" name="my-accordion-3" placeholder="."/> 
                                <label htmlFor="experience-2"></label>    
                                <div className="collapse-title text-xl font-medium">
                                    Software Developer | Facnet (Mar 2022 - Sep 2022)
                                </div>
                                <div className="collapse-content"> 
                                    <p>Participación en proyectos de desarrollo de software, ocupando el Rol de Desarrollador Fullstack, En cada proyecto, pude satisfacer los requisitos del cliente y alcanzar los objetivos fijados, Hice uso de tecnologías como HTML, CSS, JavaScript, PHP, SQL, entre otras, para crear soluciones eficaces y de primera calidad.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About
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
                        <p className="py-4">Soy un desarrollador de software con experiencia en el diseño, desarrollo y mantenimiento de aplicaciones web. Mi especialidad incluye tanto el frontend como el backend, utilizando tecnologías como React.js y ASP.NET Core. Me enorgullezco de mi capacidad para resolver problemas de forma creativa y eficiente, así como de mi habilidad para colaborar en equipos diversos y entornos dinámicos. Mi enfoque autodidacta me permite mantenerme actualizado en un sector en constante evolución, reforzando mi experiencia con cursos, diplomados y bootcamps especializados en desarrollo de software.</p>
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
                                    Diseñé e implementé soluciones utilizando React.js, Typescript, ASP.NET Core y Node js, mejorando la experiencia del usuario. Participé en equipos ágiles para entregar proyectos técnicos desafiantes.
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
                                        Desarrollé una plataforma para el monitoreo de energía renovable, mejorando la eficiencia operativa con tecnologías como Makoserver y Lua.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" id="experience-2" name="my-accordion-3" placeholder="."/> 
                                <label htmlFor="experience-2"></label>    
                                <div className="collapse-title text-xl font-medium">
                                    Software Developer | Facnet (Mar 2021 - Sep 2022)
                                </div>
                                <div className="collapse-content"> 
                                    <p>Creé aplicaciones web Full Stack con tecnologías como HTML, CSS, Javascript y PHP, logrando un cumplimiento del 100% en los objetivos del cliente.</p>
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
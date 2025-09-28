import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="hero bg-base-200 py-20" id="about">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">Sobre mí</h1>
            <p className="py-6">
              Soy Ingeniero de Sistemas con más de 3 años de experiencia en
              desarrollo Fullstack y aplicaciones móviles. Me apasiona crear
              soluciones tecnológicas que transforman procesos y generan
              experiencias memorables para los usuarios. <br /> He trabajado en la
              digitalización de empresas tradicionales y en el desarrollo de
              plataformas usadas por decenas de clientes. Además, he destacado
              en hackathons y retos de innovación, obteniendo reconocimientos
              por la calidad técnica y el impacto de las soluciones presentadas. <br />
              Mi objetivo es aportar valor e innovación en proyectos que generen
              impacto real.
            </p>
            <button className="btn btn-primary mr-5">
              <a
                href="https://github.com/lcchaverra"
                target="_blank"
                aria-label="github"
              >
                <FaGithub className="w-10 h-10 hover:scale-125 transition" />
              </a>
            </button>

            <button className="btn btn-primary">
              <a
                href="https://www.linkedin.com/in/lcchaverra/"
                target="_blank"
                aria-label="linkedin"
              >
                <FaLinkedin className="w-10 h-10 hover:scale-125 transition" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

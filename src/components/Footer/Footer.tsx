import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/lucas.cord2" target="_blank" aria-label="facebook">
                        <FaFacebook className="w-10 h-10 hover:scale-125 transition"/>
                    </a>
                    <a href="https://github.com/lcchaverra" target="_blank" aria-label="github">
                        <FaGithub className="w-10 h-10 hover:scale-125 transition"/>
                    </a>
                    <a href="https://www.linkedin.com/in/lcchaverra/" target="_blank" aria-label="linkedin">
                        <FaLinkedin className="w-10 h-10 hover:scale-125 transition"/>
                    </a>
                    <a href="https://www.youtube.com/@lucascordoba7421" target="_blank" aria-label="youtube">
                        <FaYoutube className="w-10 h-10 hover:scale-125 transition"/>
                    </a>
                </div>
            </nav> 
            <aside>
                <p>Copyright © {new Date().getFullYear()} - Luis Carlos Chaverra Córdoba | All rights reserved</p>
            </aside>
        </footer>
    </>
  )
}

export default Footer
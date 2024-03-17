'use client'
import { useRef, useEffect } from "react"
import emailjs from '@emailjs/browser'
import toast, { Toaster } from "react-hot-toast"
import Image from "next/image"

const Hero = () => {
    const form = useRef<any>(null)

    useEffect(() => {
        emailjs.init('user_NbWHHoXNBSbJSJeC7s6uJ')
    },[])

    const sendEmail = (e:any) => {
        e.preventDefault();
        if (form.current) {
            emailjs
                .sendForm('11932238243234854645', 'template_28hzft8', form.current)
                .then(() => { 
                    toast.custom((t) => (                        
                    <div role="alert" className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Se envió correctamente!</span>
                    </div>
                    )
                    );
                    form?.current?.reset();
                },
                (error) => { 
                    toast.custom((t) => (                        
                        <div role="alert" className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Error! Algo ha fallado, intentelo de nuevo.</span>
                    </div>
                    ))
                },
            );
        }
    }

  return (
    <>
        <Toaster />
        <div className="hero min-h-screen bg-base-200 max-w-full" id="hero">
            <div className="hero-content flex-col lg:flex-row w-4/5">
                <Image src="/img/me/1.jpeg" alt="Foto de perfil" width={300} height={300} className="rounded-lg shadow-2xl mr-7" />
                <div>
                <h1 className="text-5xl font-bold">Software Developer!</h1>
                <p className="py-6">Hola, soy Luis Carlos Chaverra, Desarrollador con enfoque en el mundo web y movil, Siempre estoy dispuesto a asumir nuevos desafíos y a trabajar en proyectos emocionantes que me permitan mejorar mis habilidades y expandir mis horizontes.</p>
                <button className="btn btn-primary" onClick={()=> (document.getElementById('contact_modal') as HTMLDialogElement)?.showModal()}>Contactame</button>
                </div>
            </div>
        </div>

        <dialog id="contact_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Contacto</h3>
                <p className="py-4">Llena estos datos para contactarme via Email! 😁</p>

                <form method="dialog flex flex justify-center items-center gap-2" ref={form} onSubmit={sendEmail}>
                    <div className="p-5 flex flex-col gap-5">
                        <label className="input input-bordered flex items-center gap-2">
                        Nombre
                        <input type="text" className="grow" placeholder="" name="nombre_usuario" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        Email
                        <input type="email" className="grow" placeholder="ejemplo@site.com" name="email_usuario" required/>
                        </label>
                        <textarea placeholder="¿Cuentame en que te ayudo?" className="textarea textarea-bordered w-full" name="Texto" required></textarea>
                    </div>
                    <div className="modal-action">
                        <button className="btn bg-primary" type="submit">Enviar</button>
                        <button className="btn" type="button" onClick={()=> (document.getElementById('contact_modal') as HTMLDialogElement).close()}>Cerrar</button>
                    </div>
                </form>
            </div>
        </dialog>
    </>
  )
}

export default Hero

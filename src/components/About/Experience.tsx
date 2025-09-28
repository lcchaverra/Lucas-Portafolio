const Experience = () => {
  return (
    <div className="grid flex-grow card bg-base-100 rounded-box place-items-center p-5" id="experience">
      <h1 className="text-5xl font-bold">Experiencia</h1>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical bg-base-100 p-5">
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">
              Noviembre 2023 - Actualidad
            </time>
            <div className="text-lg font-black">
              Software Developer | HelppeopleCloud
            </div>
            Desarrollé requerimientos y nuevas funcionalidades para la
            plataforma principal usada por más de 60 clientes. <br />
            Contribuí a reducir los tiempos de respuesta de incidencias mediante
            mejoras en los procesos internos y soporte técnico (DevSupport).{" "}
            <br />
            Usé tecnologías como React, ASP.NET Core, Node.js, SQL Server,
            MySQL. <br />
            Trabajé en metodologías ágiles y colaboré con equipos
            multidisciplinarios.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">Marzo 2023 - Junio 2023</time>
            <div className="text-lg font-black">
              Pasante | Software Developer | Rentic SAS
            </div>
            Desarrollé una plataforma para el monitoreo de energía renovable,
            mejorando la eficiencia operativa con tecnologías como Makoserver y
            Lua. <br />
            Implementé soluciones de software que optimizaron la gestión y
            análisis de datos energéticos. <br />
            Adquirí experiencia práctica en el desarrollo de software y la
            aplicación de tecnologías emergentes en el sector IOT.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">
              Marzo 2021 - Septiembre 2022
            </time>
            <div className="text-lg font-black">
              Software Developer | Facnet
            </div>
            Desarrollé aplicaciones web para mas de 10 clientes, muchos de los
            cuales implementaron por primera vez sistemas digitales. <br />
            Diseñé diversas soluciones entre ellas un sistema de inventario y
            facturación digital que duplicaron la productividad de los clientes.{" "}
            <br />
            Implementé tecnologías como HTML, CSS, JS, PHP, PhpMyAdmin (SQL).{" "}
            <br />
            Acompañé todo el ciclo de vida del proyecto: planeación, desarrollo,
            pruebas y entrega.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Experience;

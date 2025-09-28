import React from 'react'

const Achievements = () => {
  const achievements = [
    {
      title: "Ganador Fly Challenge",
      year: "2023",
      description:
        "Competencia interna de Helppeople. Desarrollamos una aplicación con React, TypeScript, Sass y Tailwind, destacando por buenas prácticas, organización y habilidades blandas.",
      icon: "🏆",
    },
    {
      title: "2° Lugar Hack The World",
      year: "2022",
      description:
        "Hackathon en el Chocó organizado por Río Software. En 48 horas desarrollamos una solución innovadora que obtuvo el segundo puesto.",
      icon: "🥈",
    },
    {
      title: "Voluntariado – Idiomas en Señas",
      year: "2023",
      description:
        "Desarrollador Fullstack para la landing page de Idiomas en Señas. Proyecto en React que seguirá creciendo para apoyar a la comunidad educativa.",
      icon: "🤝",
    },
  ];

  return (
     <section id="achievements" className="py-16 bg-base-100 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Reconocimientos & Voluntariado
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <div key={index} className="card bg-base-200 shadow-lg">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="card-title">
                  {item.title} <span className="text-sm">({item.year})</span>
                </h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
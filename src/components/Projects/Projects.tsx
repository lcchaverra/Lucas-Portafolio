import Card from "./Card"
import projects from "./Data"

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full flex flex-col justify-center items-center bg-base-300 py-16 px-6"
    >
      <h2 className="text-4xl font-bold mb-12">Proyectos Destacados</h2>
      <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Projects

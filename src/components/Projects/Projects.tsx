import Card from "./Card"
import data from "./Data"

const Projects = () => {

  return (
    <div className="w-full flex flex-col justify-center items-center bg-base-300 p-10" id="projects">
        <h2 className="text-4xl font-bold">Proyectos</h2>
        <div className='w-full p-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {data.map((item) => (
                <Card key={item.id} img ={item.img} title={item.title} description={item.description} url={item.url}/>
            ))}
        </div>
    </div>
  )
}

export default Projects
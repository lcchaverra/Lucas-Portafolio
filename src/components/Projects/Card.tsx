import Image from "next/image"

interface CardProps {
  title: string
  img: string
  description: string
  repo?: string
  demo?: string | null
  stack?: string[],
  type?: string
}

const Card = ({ title, img, description, repo, demo, stack, type }: CardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <figure className="px-6 pt-6">
        <Image
          src={img}
          alt={title}
          width={300}
          height={200}
          className="rounded-xl object-cover"
        />
      </figure>
      <div className="card-body text-center">
        <h3 className="card-title text-lg">{title}</h3>
        <p className="text-sm">{description}</p>

        {stack && (
          <div className="flex flex-wrap gap-2 justify-center my-2">
            <span className="badge badge-ghost">{type}</span>
            {stack.map((tech, index) => (
              <span key={index} className="badge badge-outline">{tech}</span>
            ))}
          </div>
        )}

        <div className="card-actions justify-center">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-neutral"
            >
              Repositorio
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card

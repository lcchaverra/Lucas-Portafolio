import Image from "next/image"

const Card = ({title, img, description, url}:any) => {

  return (
    <>
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <Image src={img} alt="Projects" width={300} height={300} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <a className="btn btn-primary" href={url} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
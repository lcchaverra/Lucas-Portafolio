import Image from "next/image"

const Skills = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-base-300' id='skills'>
        <h2 className="text-4xl font-bold">Habilidades</h2>
            <div className='w-full py-10 px-10 md:px-20 lg:px-32 grid grid-cols-1 gap-4 sm:grid-cols-2 place-content-center place-items-center'>
                <div className="card w-full min-h-full bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Frontend</h2>
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
                            <Image src="/img/tec/html-5.png" width={100} height={100} className='w-20' alt="Frontend logo" />
                            <Image src="/img/tec/css-3.png" width={100} height={100} className='w-20' alt="Frontend logo" />
                            <Image src="/img/tec/sass.png" width={100} height={100} className='w-20' alt="Frontend logo" />
                            <Image src="/img/tec/js.png" width={100} height={100} className='w-20' alt="Frontend logo" />
                            <Image src="/img/tec/Ts.png" width={100} height={100} className='w-20' alt="Frontend logo" />
                            <Image src="/img/tec/react.png" width={100} height={100} className='w-20' alt="Frontend logo" />
                            <Image src="/img/tec/Tailwind.png" width={100} height={100} className='w-20' alt="Frontend logo" />
                            <Image src="/img/tec/Next.js.png" width={100} height={100} className='w-20' alt="Frontend logo" />
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Backend</h2>
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
                            <Image src="/img/tec/c-sharp.png" width={100} height={100} className='w-20' alt="Backend logo" />
                            <Image src="/img/tec/py.png" width={100} height={100} className='w-20' alt="Backend logo" />
                            <Image src="/img/tec/php.png" width={100} height={100} className='w-20' alt="Backend logo" />
                            <Image src="/img/tec/net.png" width={100} height={100} className='w-20' alt="Backend logo" />
                            <Image src="/img/tec/node.png" width={100} height={100} className='w-20' alt="Backend logo" />
                            <Image src="/img/tec/ex.png" width={100} height={100} className='w-20' alt="Backend logo" />
                            <Image src="/img/tec/sql-server.png" width={100} height={100} className='w-20' alt="Backend logo" />
                            <Image src="/img/tec/mongo.png" width={100} height={100} className='w-20' alt="Backend logo" />
                            <Image src="/img/tec/fire.png" width={100} height={100} className='w-20' alt="Backend logo" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Skills
import React from "react";

export function Banner(){
return(
        <>
            <section className='h-screen  w-screen text-center relative overflow-hidden '>
            
            <div className='-z-30  h-full flex flex-col'> 

            <header >
            <h2 className='text-white pt-40 text-4xl font-medium'>Keep your eseence.</h2>
            <p className="text-white underline">Essencial for the men's</p>
            </header>
            

            </div>

            <div className='absolute top-0 bottom-0 h-full  w-full -z-10 '>
            <video className='object-center object-cover h-full w-full' autoPlay muted loop src="video.mp4"></video>
            </div>


        </section>
        </>
)
}

export default Banner;
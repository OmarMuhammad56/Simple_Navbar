import React from 'react'
import Image from 'next/image'

 const Hero = () => {
  return (
   <section className='relative h-[900px]md:h-[700px] w-full'>
    
    <Image src="/images/cvbackgroundimage1.jpg" alt="Background Image" height={800} width={800} className='w-full h-full'>
      </Image>  
     <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/90 flex flex-col gap-y-8 md:gap-y-0 md:flex-row"></div> 
     <div className="flex flex-col ml-[15px] md:ml-[80px]"></div>     
     <h1 className='text-white text-3xl md:text-[85px] leading-9 font-medium'></h1> 
   </section>
  )
}
export default Hero

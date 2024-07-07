import React from 'react'
import { BsLinkedin,BsGithub } from "react-icons/bs";

 const Footer = () => {
  return (
    <section className='bg-slate-800 w-full h-auto md:h-28'>
    <text className='bg-gray-100 text-xl font-medium flex justify-items-center '>
     Connect on
    </text>
    <div className='flex gap-x-6 '>
    <BsLinkedin size={20}  />
    <BsGithub size={20}/>
    </div>
    </section>
  )
}
export default Footer 
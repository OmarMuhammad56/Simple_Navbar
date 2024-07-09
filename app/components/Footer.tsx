import Link from 'next/link';
import React from 'react'
import { BsLinkedin,BsGithub } from "react-icons/bs";

 const Footer = () => {
  return (
    <section className='bg-slate-800 w-full h-auto md:h-32 '>
    <div className='bg-slate-800 text-white text-2xl font-medium flex items-center justify-center '>
     Connect on</div>
    
    <div className='flex gap-x-6 justify-center mt-4'>
    <Link href="https://www.linkedin.com/in/omar-muhammad-00073328b/"><BsLinkedin size={24} className='text-white hover:text-blue-500 hover:cursor-pointer' /></Link>
    <Link href="https://github.com/OmarMuhammad56?tab=overview&from=2024-07-01&to=2024-07-08"><BsGithub size={24} className='text-white hover:text-gray-700 hover:cursor-pointer'/></Link>
    </div>
    <ol className='flex flex-col text-center md:flex-row gap-y-4 md:gap-x-8 justify-center text-xl mt-4 hover:cursor-pointer text-medium '>
      <li className='text-white hover:text-teal-600 hover:scale-110'>Home </li>
      <li className='text-white hover:text-teal-600 hover:scale-110'>About </li>
      <li className='text-white hover:text-teal-600 hover:scale-110'>Contact </li>
      <li className='text-white hover:text-teal-600 hover:scale-110'>Project </li>
      <li className='text-white hover:text-teal-600 hover:scale-110'>Education </li>
    </ol>
    </section>
  )
}
export default Footer 
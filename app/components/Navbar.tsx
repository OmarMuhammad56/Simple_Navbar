import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <section className='bg-slate-800 h-auto md:h-16 '>
      
        <ul  className=' text-white  flex  flex-col text-center md:flex-row text-xl p-6 md:justify-center gap-y-3 md:gap-x-24 font-medium'>
          <Link href="/">
          <li className='hover:text-teal-600 hover:scale-110'>Home
          </li>
          </Link>
          <Link href="/">
          <li className='hover:text-teal-600 hover:scale-110'>Projects
          </li>
          </Link>
          <Link href="/">
          <li className='hover:text-teal-600 hover:scale-110'>About
          </li>
          </Link>
          <Link href="/">
          <li className='hover:text-teal-600 hover:scale-110'>Contact
          </li>
          </Link>
          <Link href="/">
          <li className='hover:text-teal-600 hover:scale-110'>Education
          </li>
          </Link>
          
        </ul>

    

    </section>
  )
}

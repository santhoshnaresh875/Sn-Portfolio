import React from 'react'
import logo from "../assets/projects/logo1 (2).png"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
// import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
          <div className="flex flex-shrink-0 items-center">
            <a href="" aria-label='Home'>
                <img src={logo} alt="Logo" className='mx-2' width={100} height={33}/>
            </a>
          </div>
          <div className="m-8 flex items-center justify-center gap-4 text-2xl">
             <a href="https://www.linkedin.com/in/santhosh-naresh-79504926a/" target='_blank' rel="nopener noreferrer" aria-label='LinkedIn'>
                <FaLinkedin/>
             </a>
             <a href="https://github.com/santhoshnaresh875?tab=repositories" target='_blank' rel="nopener noreferrer" aria-label='GitHub'>
                <FaGithub/>
             </a>
             <a href="https://www.instagram.com/_santhosh_official_19/ " target='_blank' rel="nopener noreferrer" aria-label='Instagram'>
                <FaInstagram/>
             </a>
             <a href="https://wa.me/6369292461" target='_blank' rel="nopener noreferrer" aria-label='Whatsapp'>
                <FaWhatsapp/>
             </a>
          </div>
    </nav>
  )
}

export default Navbar

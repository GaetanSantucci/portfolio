import Contact from './Contact'
import Logo from './Logo';
import './header.scss'

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Header() {


  useEffect(() => {

    // Target the two specific elements we have asigned the animate class
    gsap.to(".animated-letter", {
      x: 100,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    });
  }, []);// <- Scope!



  return (
    <header className='header'>
      <Contact />
      <Logo />
      <div className='header_letter'>
        <h2 className='animated-letter'>V</h2>
        <h2 className='animated-letter'>I</h2>
        <h2 className='animated-letter'>R</h2>
        <h2 className='animated-letter'>T</h2>
        <h2 className='animated-letter'>U</h2>
        <h2 className='animated-letter'>A</h2>
        <h2 className='animated-letter'>L</h2>
      </div>
    </header>
  )
}
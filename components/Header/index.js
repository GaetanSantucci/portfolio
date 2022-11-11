'use client';

import Contact from './Contact'
import Logo from './Logo';
import './header.scss'

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Header() {


  useEffect(() => {

    gsap.fromTo(".animated-letter", {
      // x: "random(-900,900)",
      // y: "random(-900,20)",
      color: '#012532'
    }, {
      // ease: "slow(0.7, 0.7, false)",
      x: 0,
      y: 0,
      autoAlpha: 1,
      duration: 2,
      color: '#fe800c'
    });
  }, []);// <- Scope!



  return (
    <header className='header'>
      <Contact />
      <Logo />
      <div className='header_letter'>
        <h2 className='animated-letter'>V</h2>
        <h2 className='animated-letter'>i</h2>
        <h2 className='animated-letter'>r</h2>
        <h2 className='animated-letter'>t</h2>
        <h2 className='animated-letter'>u</h2>
        <h2 className='animated-letter'>a</h2>
        <h2 className='animated-letter'>l</h2>
        <h2 className='animated-letter'>.</h2>
        <h2 className='animated-letter'>G</h2>
        <h2 className='animated-letter'>S</h2>
      </div>
    </header>
  )
}
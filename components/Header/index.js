'use client';

import Contact from './Contact'
import Logo from './Logo';
import './header.scss'

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Header() {


  useEffect(() => {

    gsap.fromTo(".animated__letter", {
      color: '#012532'
    }, {
      x: 0,
      y: 0,
      autoAlpha: 1,
      duration: 2,
      color: '#fe800c'
    });
  }, []);



  return (
    <header className='header' >
      <Contact />
      <Logo />
      <div className='header__letter'>
        <h2 className='animated__letter'>V</h2>
        <h2 className='animated__letter'>I</h2>
        <h2 className='animated__letter'>R</h2>
        <h2 className='animated__letter'>T</h2>
        <h2 className='animated__letter'>U</h2>
        <h2 className='animated__letter'>A</h2>
        <h2 className='animated__letter'>L</h2>
        <h2 className='animated__letter'>.</h2>
        <h2 className='animated__letter'>G</h2>
        <h2 className='animated__letter'>S</h2>
      </div>
    </header>
  )
}
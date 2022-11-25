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
      <h1 className='header__title'>Hello, I'm Gaetan Santucci</h1>
      <div className='header__letter'>
        <h2 className='animated__letter'>W</h2>
        <h2 className='animated__letter'>E</h2>
        <h2 className='animated__letter'>L</h2>
        <h2 className='animated__letter'>C</h2>
        <h2 className='animated__letter'>O</h2>
        <h2 className='animated__letter'>M</h2>
        <h2 className='animated__letter'>E</h2>

      </div>
      <p>on my portfolio</p>
    </header>
  )
}
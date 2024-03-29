'use client';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import './contact.scss';

import github from '/public/images/github.png'
import linkedin from '/public/images/linkedin.png'
import twitter from '/public/images/twitter.png'

export default function Contact() {

  useEffect(() => {
    gsap.to('.bounce', { duration: 0.6, x: 15, ease: "power1", repeat: -1, yoyo: true })
  });

  return (
    <div className='navigation'>
      <div className='send-mail'>
        <div className='line'></div>
        <a className='email bounce' id='joinme' href='mailto:'>
          gaetan.santucci@gmail.com
        </a>
      </div>
      <div className='social'>
        <Link href='https://github.com/GaetanSantucci'>
          <Image className='icon animated__letter' src={github} alt='logo github' />
        </Link>
        <Link href='https://www.linkedin.com/in/gaetan-santucci/'>
          <Image className='icon animated__letter' src={linkedin} alt='logo linkedin' />
        </Link>
        <Link href='https://twitter.com/GTNS83'>
          <Image className='icon animated__letter' src={twitter} alt='logo twitter' />
        </Link>
        <div className='line'></div>
      </div>
    </div>
  )
}
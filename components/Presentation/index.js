'use client';

import './presentation.scss';
import me from '/public/images/portrait.jpg'
import Image from 'next/image';
import Description from './Description';
import { presentationHover } from '/utils/gsap';
import { useEffect } from 'react';

export default function Presentation() {

  useEffect(() => {
    presentationHover();
  }, [])


  return (
    <div className='container-presentation'>
      <h2 className='scrollTitle absolute'>WHO I AM</h2>
      <h3 className='scrollIntro absolute'>Introducing <span className='scrollMyself'>
        <span>M</span><span>y</span><span>s</span><span>e</span><span>l</span><span>f</span></span></h3>
      <section className='container-presentation-card'>
        <div className='container-presentation-card-image'>
          <Image src={me} className='container-presentation-card-image--me' alt='Gaetan Santucci' />
        </div>
        <Description />
      </section>
    </div>
  )
}